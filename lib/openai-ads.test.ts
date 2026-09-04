import { beforeEach, describe, expect, it, vi } from 'vitest';
import { CONSENT_STORAGE_KEY } from '@/lib/consent';
import { initializeOpenAIAdsPixel, trackOpenAILead } from '@/lib/openai-ads';

describe('trackOpenAILead', () => {
  beforeEach(() => {
    window.localStorage.clear();
    delete window.oaiq;
    vi.unstubAllGlobals();
  });

  it('does not initialize or measure without consent', async () => {
    const oaiq = vi.fn() as unknown as OaiqQueue;
    window.oaiq = oaiq;

    await trackOpenAILead('lead@example.com');

    expect(oaiq).not.toHaveBeenCalled();
  });

  it('initializes a Pixel ID only once per app load', () => {
    const oaiq = vi.fn() as unknown as OaiqQueue;
    window.oaiq = oaiq;

    initializeOpenAIAdsPixel('test-pixel-id', false);
    initializeOpenAIAdsPixel('test-pixel-id', false);

    expect(oaiq).toHaveBeenCalledOnce();
    expect(oaiq).toHaveBeenCalledWith('init', {
      pixelId: 'test-pixel-id',
      debug: false,
    });
  });

  it('hashes a normalized email before measuring an accepted lead', async () => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, 'granted');
    const oaiq = vi.fn() as unknown as OaiqQueue;
    window.oaiq = oaiq;
    const digest = vi.fn().mockResolvedValue(new Uint8Array(32).fill(0xab).buffer);
    vi.stubGlobal('crypto', { subtle: { digest } });

    await trackOpenAILead('  Lead@Example.COM  ');

    expect(new TextDecoder().decode(digest.mock.calls[0][1])).toBe('lead@example.com');
    expect(oaiq).toHaveBeenNthCalledWith(1, 'init', {
      user: { email_sha256: 'ab'.repeat(32) },
    });
    expect(oaiq).toHaveBeenNthCalledWith(2, 'measure', 'lead_created', {
      type: 'customer_action',
    });
  });

  it('still measures anonymously when hashing is unavailable', async () => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, 'granted');
    const oaiq = vi.fn() as unknown as OaiqQueue;
    window.oaiq = oaiq;
    vi.stubGlobal('crypto', {
      subtle: { digest: vi.fn().mockRejectedValue(new Error('unavailable')) },
    });

    await expect(trackOpenAILead('lead@example.com')).resolves.toBeUndefined();

    expect(oaiq).toHaveBeenCalledOnce();
    expect(oaiq).toHaveBeenCalledWith('measure', 'lead_created', {
      type: 'customer_action',
    });
  });
});
