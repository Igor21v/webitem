import { ItemTypes } from '../../entities/Item/model/consts/ItemList';

type langType = 'ru' | 'en';

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

export const getRouteMain = (lang: langType | ':lang') => `/${lang}`;
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteItems = (type: ItemTypes) => `/items/${type}`;
export const getRouteItemDetails = (id: string) => `/item/${id}`;
export const getRouteItemCreate = () => '/items/new';
export const getRouteItemEdit = (id: string) => `/items/${id}/edit`;
export const getRouteAdmin = () => '/admin';
export const getRouteFavourites = () => '/favourites';
export const getRouteForbidden = () => '/forbidden';
