import type { IncomingHttpHeaders } from 'http';

import type { Response } from 'express';

/**
 * Additional HTTP Headers added by the Reverse Proxy.
 */
type ProxyHeaders = `x-real-ip` | `x-forwarded-for` | `x-forwarded-host`;

export type RequestHeaders = IncomingHttpHeaders &
  {
    [K in ProxyHeaders]: string;
  };

export type RequestCookies = Record<string, unknown>;

export type ServerContext = {
  /** Pass in all the headers from the request, which are often needed for logging/tracking. */
  requestHeaders: RequestHeaders;

  /** The cookies from the incoming request. */
  cookies: RequestCookies;

  /** Passed around so the mutations can set cookies as needed. */
  res: Response;
};
