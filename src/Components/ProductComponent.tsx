import React from 'react';

type Props = {
    productImage: string;
    productName: string;
    productPrice: string;
    addToCart: (ar: string) => void;
};

const ProductComponent: React.FC<Props> = ({ productImage, productName, productPrice, addToCart }) => {
    return (
        <div className="product-container round-top">
            <img className="product-container__img round-top" src={productImage || ''}></img>
            <div className="product-container__info">
                <div>
                    <h2 className="product-container__name">{productName || ''}</h2>
                    <h2 className="product-container__price">{productPrice || ''} €</h2>
                </div>
                <button className="btn-buy" onClick={() => addToCart(productName)}>
                    Buy
                </button>
            </div>
        </div>
    );
};

export default ProductComponent;
