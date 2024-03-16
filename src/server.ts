import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { buildSchema } from 'type-graphql';
import  menuItemResolver  from './resolvers/MenuItemResolver';
import  dishResolver from './resolvers/DishResolver';

async function main() {
  const app = express();

  const schema = await buildSchema({
    resolvers: [menuItemResolver, dishResolver],
    emitSchemaFile: true, 
  });

  const server = new ApolloServer({
    schema,
    context: ({ req, res }) => ({ req, res }),
  });

  server.applyMiddleware({ app });

  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/graphql`);
  });
}

main().catch((error) => {
  console.error('Error starting server:', error);
});
