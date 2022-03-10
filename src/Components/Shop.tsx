import React from 'react';
import ProductComponent from './ProductComponent';
import { Product, ProductInCart } from '../types';

type Props = {
    allProducts: Product[];
    allProductsInCart: ProductInCart[];
    setProductsInCart: React.Dispatch<React.SetStateAction<ProductInCart[]>>;
};

export default function Shop({ allProducts, allProductsInCart, setProductsInCart }: Props) {
    const productCont = allProducts.map((product: Product) => {
        return (
            <ProductComponent
                key={product.id}
                productImage={product.image}
                productName={product.product}
                productPrice={parseFloat(product.price).toFixed(2)}
                addToCart={addProductToCart}
            />
        );
    });

    function addProductToCart(productName: string) {
        const productToAdd: ProductInCart = {
            product: productName,
            count: 1,
        };

        if (allProductsInCart.length === 0) {
            setProductsInCart((prevProductsInCart: ProductInCart[]) => [productToAdd, ...prevProductsInCart]);
        } else {
            // Check if there already is a product object with key/value product = productName & if there is add 1 to property "count" value
            if (allProductsInCart.filter((p: ProductInCart) => p.product === productName).length > 0) {
                const index = allProductsInCart.findIndex((p: ProductInCart) => p.product === productName);
                let updatedProductsCart = [...allProductsInCart];
                updatedProductsCart[index].count++;
                setProductsInCart(updatedProductsCart);
            } else {
                // If there isn't such product in cart yet, then add it, with initial count value 1
                setProductsInCart((prevProductsInCart: ProductInCart[]) => [productToAdd, ...prevProductsInCart]);
            }
        }
    }

    return (
        <div id="shop" className="container">
            <h1 className="shop-name">Shop</h1>
            <div className="products-container">{productCont}</div>
        </div>
    );
}
