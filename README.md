# msw-supertest-issues

Repo to show issues related to using `msw` and `supertest` at the same time in GraphQL testing.

## Goals

1. Use `msw` to mock the `get` API call in the file `src/utils/vendor/api.ts`.
1. Do not mock the `post` to the GraphQL app via `supertest`.
   - The GraphQL resolver, `src/graphql/Website/resolvers.ts`, calls the API function that does the `get` to be mocked.

## Steps to see the error

1. Clone the Repo
1. `yarn install` dependencies.
1. Run `yarn test`.

   An error like this should be shown:

   ```text
   Error: cannot undefined undefined (500)
        at Response.toError (node_modules/superagent/lib/node/response.js:94:15)
        at ResponseBase._setStatusProperties (node_modules/superagent/lib/response-base.js:123:16)
        at new Response (node_modules/superagent/lib/node/response.js:41:8)
        at Test.Request._emitResponse (node_modules/superagent/lib/node/index.js:752:20)
        at IncomingMessage.<anonymous> (node_modules/superagent/lib/node/index.js:916:38)
        at IncomingMessage.emit (events.js:326:22)
        at endReadableNT (_stream_readable.js:1226:12)
        at processTicksAndRejections (internal/process/task_queues.js:80:21) {
      status: 500,
      text: 'POST body missing. Did you forget use body-parser middleware?',
      method: undefined,
      path: undefined
    }
   ```

1. Open the file `src/graphql/Website/__tests__/getWebsitesQuery.spec.ts` and comment all the `msw` related code.
1. Run `yarn test` again

   The expected ECONNREFUSED error should be shown since the API call is not being mocked:

   ```text
   request to https://localhost:9000/sites/created failed, reason: connect ECONNREFUSED 127.0.0.1:9000
   ```
