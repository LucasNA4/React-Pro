import { useEffect, useState } from "react";
import { Product, onChangeArgs } from "../interfaces/interfaces";


interface useProductProps {
    product: Product;
    value?: number;
    onChange?: ( args: onChangeArgs ) => void;
}

export const useProduct = ( { product, value = 0, onChange }: useProductProps ) => {

    const [counter, setCounter] = useState( value );

    const increaseBy = ( value: number ) => {
        const newValue = Math.max( counter + value, 0 );
        setCounter( newValue );
        
        onChange && onChange({ count: newValue, product });
    }

    useEffect(() => {
        setCounter( value );
    }, [value])
    
    return {
        counter,
        increaseBy
    }
}
