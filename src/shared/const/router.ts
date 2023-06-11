import { ItemTypes } from '../../entities/Item/model/consts/ItemList';

export type langType = 'ru' | 'en' | ':lang';

export type AppRoutes =
    | 'main'
    | 'about'
    | 'profile'
    | 'items'
    | 'item_details'
    | 'item_create'
    | 'item_edit'
    | 'favourites'
    | 'admin_panel'
    | 'forbidden'
    | 'not_found';

const getRouteLang = (
    lang: langType,
    func: (param?: string) => string,
    param?: string,
) => {
    if (lang === 'ru') {
        return func(param);
    }
    return `/${lang}${func(param)}`;
};

const routerMap: Record<AppRoutes, (value: any) => string> = {
    main: () => '/',
    about: () => '/about',
    profile: (id: string) => `/profile/${id}`,
    items: (type: ItemTypes) => `/items/${type}`,
    item_details: (id: string) => `/item/${id}`,
    item_create: () => '/items/new',
    item_edit: (id: string) => `/items/${id}/edit`,
    favourites: () => '/favourites',
    admin_panel: () => '/admin',
    forbidden: () => '/forbidden',
    not_found: () => '/',
};

export const getRoute = (page: AppRoutes, lang: langType, param?: string) => {
    return getRouteLang(lang, routerMap[page], param);
};

/* export const getRouteMain = () => `/`;
export const getRouteAbout = (lang: langType) =>
    getRouteLang(lang, () => '/about');
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteItems = (type: ItemTypes) => `/items/${type}`;
export const getRouteItemDetails = (id: string) => `/item/${id}`;
export const getRouteItemCreate = () => '/items/new';
export const getRouteItemEdit = (id: string) => `/items/${id}/edit`;
export const getRouteFavourites = (lang: langType) =>
    getRouteLang(lang, () => '/favourites');
export const getRouteAdmin = () => '/admin';
export const getRouteForbidden = () => '/forbidden'; */
