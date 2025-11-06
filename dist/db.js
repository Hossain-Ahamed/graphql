const products = [
    {
        id: 'sadf1234',
        name: 'Product 1',
        image: 'image1.jpg',
        description: 'Description for Product 1',
        price: 100,
        quantity: 10,
        categoryId: 'cat1234',
        onStock: true,
    },
    {
        id: 'sadf1235',
        name: 'Product 2',
        image: 'image2.jpg',
        description: 'Description for Product 2',
        price: 200,
        quantity: 5,
        categoryId: 'cat1235',
        onStock: false,
    },
    {
        id: 'sadf1236',
        name: 'Product 3',
        image: 'image3.jpg',
        description: 'Description for Product 3',
        price: 300,
        quantity: 0,
        categoryId: 'cat1236',
        onStock: false,
    },
    {
        id: 'sadf1237',
        name: 'Product 4',
        image: 'image4.jpg',
        description: 'Description for Product 4',
        price: 400,
        quantity: 8,
        categoryId: 'cat1234',
        onStock: true,
    },
    {
        id: 'sadf1238',
        name: 'Product 5',
        image: 'image5.jpg',
        description: 'Description for Product 5',
        price: 500,
        quantity: 12,
        categoryId: 'cat1238',
        onStock: true,
    }
];
const categories = [
    {
        id: 'cat1234',
        name: 'Category A',
    },
    {
        id: 'cat1235',
        name: 'Category B',
    },
    {
        id: 'cat1236',
        name: 'Category C',
    },
    {
        id: 'cat1237',
        name: 'Category D',
    },
    {
        id: 'cat1238',
        name: 'Category E',
    },
];
const reviews = [
    {
        id: 'rev1234',
        productId: 'sadf1234',
        rating: 4,
        date: '2023-01-01',
        review: 'Great product!',
    },
    {
        id: 'rev1235',
        productId: 'sadf1235',
        rating: 5,
        date: '2023-02-01',
        review: 'Excellent quality!',
    },
    {
        id: 'rev1236',
        productId: 'sadf1236',
        rating: 3,
        date: '2023-03-01',
        review: 'Average product.',
    },
];
export const db = {
    products,
    categories,
    reviews,
};
