// Контрольные точки для адаптива (Переменная для SCSS в preproc.scss)
export type Breakpoint =
    | 'SCREEN_SM'
    | 'SCREEN_MD'
    | 'SCREEN_LG'
    | 'SCREEN_XL'
    | 'SCREEN_XXL';

export const RESIZEBREAKPOINTS: Record<Breakpoint, number> = {
    SCREEN_SM: 530,
    SCREEN_MD: 730,
    SCREEN_LG: 992,
    SCREEN_XL: 1160,
    SCREEN_XXL: 1400,
};
