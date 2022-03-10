import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { ProductInCart } from '../types';

type Props = {
    productsInCart: ProductInCart[];
};

export default function Navbar({ productsInCart }: Props) {
    const shoppingCart = <FontAwesomeIcon icon={faCartShopping} />;

    return (
        <>
            <div className="nav-container" id="navbar">
                <nav className="nav-container-center">
                    <a className="store-name" href="#">
                        VeggieStore
                    </a>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/shop">Shop</Link>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <Link to="/cart">
                                {shoppingCart} |{productsInCart.length}|
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <Outlet />
        </>
    );
}
