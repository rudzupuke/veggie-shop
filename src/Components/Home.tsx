import React from 'react';
import Header from './Header';
import Shop from './Shop';
import NewProductForm from './NewProductForm';
import { Product, ProductInCart } from '../types';

type Props = {
    allProducts: Product[];
    allProductsInCart: ProductInCart[];
    setProductsInCart: React.Dispatch<React.SetStateAction<ProductInCart[]>>;
    addProducts: (val: Product) => void;
};

export default function Home({ allProducts, allProductsInCart, setProductsInCart, addProducts }: Props) {
    return (
        <>
            <Header />
            <Shop
                allProducts={allProducts}
                allProductsInCart={allProductsInCart}
                setProductsInCart={setProductsInCart}
            />
            <NewProductForm addProducts={addProducts} />
        </>
    );
}
