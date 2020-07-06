import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { makeExecutableSchema } from '@graphql-tools/schema';

/**
 * Take in all the scattered schemas and merge them in to one.
 */

import { websiteTypeDefs, websiteResolvers } from './Website';
import { customScalarTypeDefs, customScalarResolvers } from './customTypes';

const schema = makeExecutableSchema({
  typeDefs: mergeTypeDefs([customScalarTypeDefs, websiteTypeDefs]),
  resolvers: mergeResolvers([customScalarResolvers, websiteResolvers]),
});

export { schema };
