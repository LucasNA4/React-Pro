import ProductCard, { ProductButtons, ProductImage } from "."
import { ProductInCart, Product } from "../interfaces/interfaces";

interface Props {
    shoppingCart: { [key: string]: ProductInCart };
    onProductCountChange: ({ count, product }: {
        count: number;
        product: Product;
    }) => void;
}


export const ShoppingCart = ({ shoppingCart, onProductCountChange }: Props) => {
    return (
        <div className="shopping-cart">
            {
                Object.entries( shoppingCart ).map( ([ key, product ]) => (
                    <ProductCard
                        key={ key }
                        product={ product }
                        className="bg-dark text-white"
                        style={{ width: '110px' }}
                        value={ product.count }
                        onChange={ onProductCountChange }
                    >
                        <ProductImage className="custom-image" />
                        <ProductButtons 
                            className="custom-buttons"
                            style={{ display: "flex", justifyContent: 'center' }}
                        />
                    </ProductCard>
                ))
            }
        </div>
    )
}
