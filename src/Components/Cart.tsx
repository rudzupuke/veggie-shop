import React from 'react';
import CartProduct from './CartProduct';
import { ProductInCart, Product } from '../types';

type Props = {
    // cartIsOpen: boolean;
    allProducts: Product[];
    allProductsInCart: ProductInCart[];
    setProductsInCart: React.Dispatch<React.SetStateAction<ProductInCart[]>>;
};

export default function Cart({ allProducts, allProductsInCart, setProductsInCart }: Props) {
    let totalPrice = 0;
    allProductsInCart.map((productInCart: ProductInCart) => {
        let index = allProducts.findIndex((p: Product) => p.product === productInCart.product);
        totalPrice += productInCart.count * Number(allProducts[index].price);
    });

    let cartProducts = allProductsInCart.map((productInCart: ProductInCart) => {
        let index = allProducts.findIndex((p: Product) => p.product === productInCart.product);
        let price = Number(allProducts[index].price) * productInCart.count;

        let priceAsString = price.toFixed(2);
        console.log(priceAsString);
        let priceArray = priceAsString.split('.');
        console.log(priceArray);

        return (
            <CartProduct
                key={productInCart.product}
                image={allProducts[index].image}
                productName={productInCart.product}
                priceEuros={priceArray[0]}
                priceCents={priceArray[1]}
                productCount={productInCart.count}
                removeProduct={removeProductFromCart}
                increaseProductAmount={increaseProductAmount}
                decreaseProductAmount={decreaseProductAmount}
            />
        );
    });

    function removeProductFromCart(product: string) {
        const index = allProductsInCart.findIndex((p: ProductInCart) => p.product === product);
        let updatedProductsCart = [...allProductsInCart];
        updatedProductsCart.splice(index, 1);
        setProductsInCart(updatedProductsCart);
    }

    function increaseProductAmount(product: string) {
        const index = allProductsInCart.findIndex((p: ProductInCart) => p.product === product);
        let updatedProductsCart = [...allProductsInCart];
        updatedProductsCart[index].count++;

        setProductsInCart(updatedProductsCart);
    }

    function decreaseProductAmount(product: string) {
        const index = allProductsInCart.findIndex((p: ProductInCart) => p.product === product);
        let updatedProductsCart = [...allProductsInCart];
        if (updatedProductsCart[index].count > 1) {
            updatedProductsCart[index].count--;
        }

        setProductsInCart(updatedProductsCart);
    }

    return (
        <div className="cart-open">
            <div className="container cart">
                <div className="cart-products">
                    <h1>
                        {allProductsInCart.length > 0
                            ? 'You have ' + allProductsInCart.length + ' products in your cart!'
                            : 'Your cart is empty!'}
                    </h1>
                    {cartProducts}
                </div>
                <div className="cart-price">
                    <h2>{`Total: ${totalPrice.toFixed(2)} €`}</h2>
                </div>
            </div>
        </div>
    );
}
