export type { Product, ProductInCart };

interface Product {
    product: string;
    price: string;
    image: string;
    id: string;
}

interface ProductInCart {
    product: string;
    count: number;
}
