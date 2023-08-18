import { useEffect, useState, useRef } from "react";
import { Product, onChangeArgs } from "../interfaces/interfaces";


interface useProductProps {
    product: Product;
    value?: number;
    onChange?: ( args: onChangeArgs ) => void;
}

export const useProduct = ( { product, value = 0, onChange }: useProductProps ) => {

    const [counter, setCounter] = useState( value );

    const isControlled = useRef( !!onChange );

    const increaseBy = ( value: number ) => {

        if ( isControlled.current ) {
            return onChange!({ count: value, product });
        }

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
