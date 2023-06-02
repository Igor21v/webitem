import { useEffect } from 'react';

export function useYandexMetrikaHit(deps?: string) {
    useEffect(() => {
        if (
            __PROJECT__ !== 'storybook' &&
            __PROJECT__ !== 'jest' &&
            !__IS_DEV__
        ) {
            ym(93784203, 'hit', '#');
            console.log('Trap YM');
        }
        console.log(`Trap YM 2${deps}`);
    }, [deps]);
}
