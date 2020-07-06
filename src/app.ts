import { ApolloServer } from 'apollo-server-express';
import express from 'express';

import { schema } from './graphql/schema';

const app = express();
app.disable(`x-powered-by`);

const domain = `redacted.com`

export const corsOptions = {
  origin: new RegExp(`.${domain}$`),
  credentials: true,
  optionsSuccessStatus: 204,
  maxAge: 600,
};

const apolloServer = new ApolloServer({
  schema,
  cacheControl: true,
});

apolloServer.applyMiddleware({ app, path: `/`, cors: corsOptions });

export { app };
