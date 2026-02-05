import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

const APEX_DOMAIN = "aiseo.hamburg"
const PROD_HOSTS = new Set([APEX_DOMAIN, `www.${APEX_DOMAIN}`])

export function proxy(request: NextRequest) {
    const host = request.headers.get("host") ?? request.nextUrl.host

    if (!host || !PROD_HOSTS.has(host)) {
        return NextResponse.next()
    }

    const url = request.nextUrl.clone()
    let shouldRedirect = false

    if (host === `www.${APEX_DOMAIN}`) {
        url.host = APEX_DOMAIN
        shouldRedirect = true
    }

    const protocol = request.headers.get("x-forwarded-proto") ?? url.protocol.replace(":", "")

    if (protocol !== "https") {
        url.protocol = "https:"
        shouldRedirect = true
    }

    if (shouldRedirect) {
        return NextResponse.redirect(url, 301)
    }

    return NextResponse.next()
}

export const config = {
    matcher: "/:path*",
}
