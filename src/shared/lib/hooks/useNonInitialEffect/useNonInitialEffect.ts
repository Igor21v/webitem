import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

export const useNonInitialEffect = (
    callback: EffectCallback,
    deps?: DependencyList,
) => {
    const initialRender = useRef(true);

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
        } else {
            return callback();
        }
        return undefined;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
};
