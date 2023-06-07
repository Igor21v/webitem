import { ItemTypes } from '../../entities/Item/model/consts/ItemList';

export type langType = 'ru' | 'en' | ':lang';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ITEMS = 'items',
    ITEM_DETAILS = 'item_details',
    ITEM_CREATE = 'item_create',
    ITEM_EDIT = 'item_edit',
    FAVOURITES = 'favourites',
    NOT_FOUND = 'not_found',
    ADMIN_PANEL = 'admin_panele',
    FORBIDDEN = 'forbidden',
}

const getRoute = (lang: langType, func: (param?: string) => string) => {
    console.log(`trap1 ${lang}`);
    if (lang === 'ru') {
        console.log(`trap2  ${func()}`);
        return func();
    }
    console.log(`trap3  /:lang${func()}`);
    return `/${lang}${func()}`;
};

export const getRouteMain = () => `/`;
export const getRouteAbout = (lang: langType) => getRoute(lang, () => '/about');
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteItems = (type: ItemTypes) => `/items/${type}`;
export const getRouteItemDetails = (id: string) => `/item/${id}`;
export const getRouteItemCreate = () => '/items/new';
export const getRouteItemEdit = (id: string) => `/items/${id}/edit`;
export const getRouteAdmin = () => '/admin';
export const getRouteFavourites = (lang: langType) =>
    getRoute(lang, () => '/favourites');
export const getRouteForbidden = () => '/forbidden';
