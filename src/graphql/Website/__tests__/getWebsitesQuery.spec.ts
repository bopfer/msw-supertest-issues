import supertest from 'supertest';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { app } from '../../../app';

const getWebsites = /* GraphQL */ `
  query GetWebsites {
    getWebsites {
      websites {
        id
        name
        vendorSiteName
        createdAt
        userFullName
      }
    }
  }
`;

const server = setupServer(
  rest.get(`https://localhost:9000/sites/created`, (_req, res, ctx) => {
    return res(ctx.json([`fake-site-1`, `fake-site-2`]));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test(`Websites`, async () => {
  await supertest(app)
    .post(`/`)
    .send({ query: getWebsites })
    .then((res) => {
      if (res.error) {
        /* HTTP error. */
        console.error(res.error);
      }

      if (res.body.errors) {
        /** GraphQL error. */
        console.error(res.body.errors);
      }

      expect(res.error).toBeFalsy();
      expect(res.body.errors).toBeFalsy();
    });
});
