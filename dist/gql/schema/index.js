export const typeDefs = `#graphql

#  ! means must have a value (not null)
 type Product {
    id: ID! 
    name: String
    image: String
    description: String
    price: Float
    quantity: Int
    category: String
    onStock: Boolean
 }

 type Query{
  products : [Product]
  product (productId : ID!): Product
 }
`;
