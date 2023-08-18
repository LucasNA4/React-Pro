import { ProductMap, ShoppingCart } from "../components"
import '../styles/custom-styles.css'
import { useShoppingCart } from "../hooks/useShoppingCart"


export const ShoppingPage = () => {

    const { shoppingCart, onProductCountChange } = useShoppingCart();

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <ProductMap shoppingCart={ shoppingCart } onProductCountChange={ onProductCountChange } />

            <ShoppingCart shoppingCart={ shoppingCart } onProductCountChange={ onProductCountChange } />
        </div>
    )
}
