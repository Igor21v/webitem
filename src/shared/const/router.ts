import { ElementTypes } from '../../entities/Article/model/consts/ElementList';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    FAVOURITES = 'favourites',
    NOT_FOUND = 'not_found',
    ADMIN_PANEL = 'admin_panele',
    FORBIDDEN = 'forbidden',
}

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = (type: ElementTypes) => `/articles/${type}`;
export const getRouteArticleDetails = (id: string) => `/article/${id}`;
export const getRouteArticleCreate = () => '/articles/new';
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteAdmin = () => '/admin';
export const getRouteFavourites = () => '/favourites';
export const getRouteForbidden = () => '/forbidden';
