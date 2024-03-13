import { gql } from 'apollo-server';

export const restaurantTypeDefs = gql`
  type Restaurant {
    id: ID!
    name: String!
    description: String
    dishes: [Dish]
  }
`;
