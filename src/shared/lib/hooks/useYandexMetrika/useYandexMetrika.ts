import { useEffect } from 'react';

export function useYandexMetrikaHit(deps?: string) {
    useEffect(() => {
        if (
            __PROJECT__ !== 'storybook' &&
            __PROJECT__ !== 'jest' &&
            !__IS_DEV__
        ) {
            ym(93784203, 'hit', '#');
        }
    }, [deps]);
}
