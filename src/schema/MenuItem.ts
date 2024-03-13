import { gql } from 'apollo-server';

export const menuItemTypeDefs = gql`
  type MenuItem {
    id: ID!
    restaurant: Restaurant!
    dish: Dish!
  }
`;
