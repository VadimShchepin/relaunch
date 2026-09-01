/**
 * OpenAI ads pixel command queue.
 *
 * Before the SDK file arrives, `oaiq` is a stub that buffers calls in `q`. Once
 * bzrcdn.openai.com/sdk/oaiq.min.js loads it replaces the stub with the real
 * dispatcher and replays the buffer, so call order is preserved either way.
 */
interface OaiqQueue {
  (...args: unknown[]): void;
  q?: IArguments[];
}

interface Window {
  oaiq?: OaiqQueue;
}
