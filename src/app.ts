import { ApolloServer } from 'apollo-server-express';
import express from 'express';

import { schema } from './graphql/schema';

const app = express();

const apolloServer = new ApolloServer({
  schema,
  cacheControl: true,
});

apolloServer.applyMiddleware({ app, path: `/` });

export { app };
