// <Адрес страницы, позиция скролла>
export type ScrollSchema = Record<string, number>;

export interface PageDimensionsSchema {
    width: number;
    height: number;
}

export interface UISchema {
    scroll: ScrollSchema;
    dimensions: PageDimensionsSchema
}
