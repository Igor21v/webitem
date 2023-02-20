import { DependencyList, useEffect, useRef } from "react";

export const useNonInitialEffect = (callback: () => void, deps?: DependencyList) => {
    const initialRender = useRef(true);
    
    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
        } else {
            console.log('Working useNonInitEffect')
            return callback();
        }
        return undefined
    }, [callback, deps]);
}