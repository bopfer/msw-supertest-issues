import { gql } from 'apollo-server';

const typeDefs = gql`
  type Website {
    id: ID!
    name: String!
    vendorSiteName: String
    createdAt: Date!
    userFullName: String!
  }

  type GetWebsitesPayload {
    websites: [Website!]!
  }

  type Query {
    getWebsites: GetWebsitesPayload!
  }
`;

export { typeDefs };
