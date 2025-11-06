import { products } from "../../db";

export const resolvers = {
  Query: {
    products: () => products,
    product : (parent : any,args : {productId: string},context : any) =>{
      const result = products.find(product => product.id === args.productId);
      return result;
    },
  },
};