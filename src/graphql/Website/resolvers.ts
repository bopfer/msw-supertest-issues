import { sitesCreated } from '../../utils/vendor/api';

import type { Resolvers } from '../generatedTypes';

const resolvers: Resolvers = {
  Query: {
    async getWebsites() {
      /* The `get` via node-fetch happens in the `sitesCreated` function. */
      const vendorSites = await sitesCreated();

      /**
       * In my real app `websites` come from the local database.
       * Hard coding here for demo purposes.
       */
      const websites = await Promise.resolve([
        {
          id: 1,
          name: `foo`,
          vendorSiteName: vendorSites[0],
          createdAt: new Date(),
          user: {
            firstName: `Foo`,
            lastName: `Bar`,
          },
        },
        {
          id: 2,
          name: `bar`,
          vendorSiteName: vendorSites[1],
          createdAt: new Date(),
          user: {
            firstName: `Foo`,
            lastName: `Bar`,
          },
        },
      ]);

      return {
        websites: websites.map(({ id, name, vendorSiteName, createdAt, user }) => ({
          id: String(id),
          name,
          createdAt,
          vendorSiteName,
          userFullName: `${user.firstName} ${user.lastName}`,
        })),
      };
    },
  },
};

export { resolvers };
