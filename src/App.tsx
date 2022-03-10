import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Shop from './Components/Shop';
import Cart from './Components/Cart';
import startingProducts from './startingproducts';
import { Product, ProductInCart } from './types';

function App() {
    const [products, setProducts] = React.useState<Product[]>(
        () => JSON.parse(localStorage.getItem('products')!) || startingProducts,
    );
    // React.useState(() => ....) - lazy state initialization

    const [productsInCart, setProductsInCart] = React.useState<ProductInCart[]>(
        () => JSON.parse(localStorage.getItem('productsInCart')!) || [],
    );

    React.useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    }, [products]);

    React.useEffect(() => {
        localStorage.setItem('productsInCart', JSON.stringify(productsInCart));
    }, [productsInCart]);

    function addProducts(newProduct: Product) {
        setProducts((prevProducts: Product[]) => [newProduct, ...prevProducts]);
    }

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Navbar productsInCart={productsInCart} />}>
                    <Route
                        index
                        element={
                            <Home
                                allProducts={products}
                                allProductsInCart={productsInCart}
                                setProductsInCart={setProductsInCart}
                                addProducts={addProducts}
                            />
                        }
                    />
                    <Route
                        path="/shop"
                        element={
                            <Shop
                                allProducts={products}
                                allProductsInCart={productsInCart}
                                setProductsInCart={setProductsInCart}
                            />
                        }
                    />

                    <Route
                        path="/cart"
                        element={
                            <Cart
                                allProducts={products}
                                allProductsInCart={productsInCart}
                                setProductsInCart={setProductsInCart}
                            />
                        }
                    />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
