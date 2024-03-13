import { ApolloServer } from 'apollo-server';
import { typeDefs as queryTypeDefs } from './schema/queries';
import { typeDefs as mutationTypeDefs } from './schema/mutations';
import { restaurantResolver } from './resolvers/RestaurantResolver';
import { dishResolver } from './resolvers/DishResolver';
import { db } from './utils/db';

const server = new ApolloServer({
  typeDefs: [queryTypeDefs, mutationTypeDefs],
  resolvers: [restaurantResolver, dishResolver],
  context: { db },
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
