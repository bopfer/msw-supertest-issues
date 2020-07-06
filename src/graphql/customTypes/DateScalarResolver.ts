import { Kind, GraphQLScalarType } from 'graphql';

/**
 * Dates are always transmitted and received in epoch time.
 * This resolver will convert from `Date` to epoch when sending data to the client.
 * It will also convert from epoch to `Date` when receiving data from the client.
 */
export const DateScalarResolver = new GraphQLScalarType({
  name: `Date`,
  description: `Date custom scalar type`,

  parseValue(value: number) {
    return new Date(value);
  },

  serialize(value: Date) {
    return value.getTime();
  },

  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(ast.value);
    }

    return null;
  },
});
