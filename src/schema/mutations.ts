import { gql } from 'apollo-server';

export const mutationTypeDefs = gql`
  type Mutation {
    createRestaurant(name: String!, description: String): Restaurant
    createDish(restaurantId: ID!, name: String!, description: String, price: Float!): Dish
    addToMenu(restaurantId: ID!, dishId: ID!): MenuItem
    addToppingToDish(dishId: ID!, toppingId: ID!): Dish
    addExtraToDish(dishId: ID!, extraId: ID!): Dish
  }
`;
