import type { GraphQLError } from 'graphql';

import type { Query } from '../graphql/generatedTypes';

type CookieHeaderKeys = `set-cookie`;
type CookieHeaders = {
  [K in CookieHeaderKeys]: string[];
};

export type BodyError = {
  errors: GraphQLError[];
};

/**
 * Covers all the possible headers, payloads, and errors that can be part of the `body`.
 * Useful in testing for running assertions over the `body` content.
 */
export type Response = {
  body: BodyError & {
    data: Query;
  };
  header: CookieHeaders;
};
