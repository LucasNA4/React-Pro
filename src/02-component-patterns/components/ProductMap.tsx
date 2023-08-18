import ProductCard, { ProductButtons, ProductImage, ProductTitle } from "."
import { products } from "../data/products"
import { Product, ProductInCart } from "../interfaces/interfaces"

interface Props {
    shoppingCart: { [key: string]: ProductInCart };
    onProductCountChange: ({ count, product }: {
        count: number;
        product: Product;
    }) => void;
}


export const ProductMap = ({ shoppingCart, onProductCountChange }: Props) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>
            
            {
                products.map( product => (
                    <ProductCard 
                        key={ product.id }
                        product={ product }
                        className="bg-dark text-white"
                        value={ shoppingCart[product.id]?.count || 0 }
                        onChange={ onProductCountChange }
                    >
                        <ProductImage className="custom-image" />
                        <ProductTitle className="text-bold" />
                        <ProductButtons className="custom-buttons" />
                    </ProductCard>
                ))
            }

        </div>
    )
}
