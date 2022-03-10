import { Product } from './types';
import { nanoid } from 'nanoid';

const startingProducts: Product[] = [
    {
        product: 'Broccoli',
        price: '0.89',
        image: 'https://images.unsplash.com/photo-1628773822990-202aed1e567e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJyb2Njb2xpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        id: nanoid(),
    },
    {
        product: 'Spinach',
        price: '1.09',
        image: 'https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3BpbmFjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        id: nanoid(),
    },
    {
        product: 'Lettuce',
        price: '0.65',
        image: 'https://images.unsplash.com/photo-1604335310236-0ca3d4e4afcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGV0dHVjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        id: nanoid(),
    },
    {
        product: 'Tomatoes',
        price: '0.89',
        image: 'https://images.unsplash.com/photo-1582284540020-8acbe03f4924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dG9tYXRvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        id: nanoid(),
    },

    {
        product: 'Apples',
        price: '0.55',
        image: 'https://images.unsplash.com/photo-1569870499705-504209102861?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        id: nanoid(),
    },
    {
        product: 'Oranges',
        price: '1.50',
        image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b3Jhbmdlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        id: nanoid(),
    },
    {
        product: 'Carrots',
        price: '0.30',
        image: 'https://images.unsplash.com/photo-1590868309235-ea34bed7bd7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fycm90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        id: nanoid(),
    },
    {
        product: 'Potatoes',
        price: '0.49',
        image: 'https://images.unsplash.com/photo-1508313880080-c4bef0730395?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG90YXRvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        id: nanoid(),
    },
];

export default startingProducts;
