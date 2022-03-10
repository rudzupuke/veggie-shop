import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

type Props = {
    image: string;
    productName: string;
    priceEuros: string;
    priceCents: string;
    productCount: number;
    increaseProductAmount: (p: string) => void;
    decreaseProductAmount: (p: string) => void;
    removeProduct: (ar: string) => void;
};

export default function CartProduct({
    productName,
    priceEuros,
    priceCents,
    image,
    removeProduct,
    increaseProductAmount,
    decreaseProductAmount,
    productCount,
}: Props) {
    const remove = <FontAwesomeIcon icon={faXmark} />;
    const anngleUp = <FontAwesomeIcon icon={faAngleUp} />;
    const angleDown = <FontAwesomeIcon icon={faAngleDown} />;
    return (
        <div className="product-in-cart">
            <img className="product-in-cart__image" src={image} />
            <p className="product-in-cart__name">{productName}</p>
            <p className="product-in-cart__counter">
                <a onClick={() => decreaseProductAmount(productName)} className="product-in-cart__counter-change">
                    {angleDown}
                </a>
                <span className="product-in-cart__counter-count">{productCount}</span>
                <a onClick={() => increaseProductAmount(productName)} className="product-in-cart__counter-change">
                    {anngleUp}
                </a>
            </p>

            <p className="product-in-cart__price">
                <span className="product-in-cart__price-1">{priceEuros}</span>
                <span className="product-in-cart__price-2">
                    <span>{priceCents}</span>
                    <span>€</span>
                </span>
            </p>
            <a className="product-in-cart__remove" onClick={() => removeProduct(productName)}>
                {remove}
            </a>
        </div>
    );
}
