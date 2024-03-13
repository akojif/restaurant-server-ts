import { gql } from 'apollo-server';

export const queryTypeDefs = gql`
  type Query {
    restaurants: [Restaurant]
    restaurant(id: ID!): Restaurant
    dishes: [Dish]
    dish(id: ID!): Dish
    menuItems(restaurantId: ID!): [MenuItem]
  }
`;
