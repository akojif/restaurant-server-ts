import { gql } from 'apollo-server';

export const dishTypeDefs = gql`
  type Dish {
    id: ID!
    name: String!
    description: String
    price: Float!
    toppings: [Topping]
    extras: [Extra]
  }
`;
