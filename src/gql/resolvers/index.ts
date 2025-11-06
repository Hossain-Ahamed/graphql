import { db } from "../../db.js";

export const resolvers = {
    Query: {
        products: () => db.products,
        product: (parent: any, args: { productId: string }, context: any) => {
            const result = db.products.find(product => product.id === args.productId);
            return result;
        },

        categories: () => db.categories,
        category: (parent: any, args: { categoryId: string }, context: any) => {
            const result = db.categories.find(category => category.id === args.categoryId);
            return result;
        },
    },
    //relationship resolver
    Product: {
        category: (parent: { categoryId: string }, args: any, context: any) => {
            return db.categories.find(category => category.id === parent.categoryId);
        },
        reviews : (parent: { id: string }, args: any, context: any) => {
            return db.reviews.filter(review => review.productId === parent.id);
        }
    },
    Category: {
        products: ({id}, args: any, context: any) => { //destructuable
            return db.products.filter(product => product.categoryId ===id);
        }
    }
};