import { ElementTypes } from '../../entities/Item/model/consts/ElementList';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'items',
    ARTICLE_DETAILS = 'item_details',
    ARTICLE_CREATE = 'item_create',
    ARTICLE_EDIT = 'item_edit',
    FAVOURITES = 'favourites',
    NOT_FOUND = 'not_found',
    ADMIN_PANEL = 'admin_panele',
    FORBIDDEN = 'forbidden',
}

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteItems = (type: ElementTypes) => `/items/${type}`;
export const getRouteItemDetails = (id: string) => `/item/${id}`;
export const getRouteItemCreate = () => '/items/new';
export const getRouteItemEdit = (id: string) => `/items/${id}/edit`;
export const getRouteAdmin = () => '/admin';
export const getRouteFavourites = () => '/favourites';
export const getRouteForbidden = () => '/forbidden';
