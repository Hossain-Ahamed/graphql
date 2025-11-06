import { products } from "../../db";
export const resolvers = {
    Query: {
        products: () => products,
        product: (parent, args, context) => {
            const result = products.find(product => product.id === args.productId);
            return result;
        },
    },
};
