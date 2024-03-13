import { gql } from 'apollo-server';

export const toppingTypeDefs = gql`
  type Topping {
    id: ID!
    name: String!
    price: Float!
  }
`;
