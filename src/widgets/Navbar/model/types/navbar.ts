import { AppRoutes } from '@/shared/const/router';

export interface NavbarItemType {
    path: AppRoutes;
    pathParam?: string;
    text: string;
    authOnly?: boolean;
    fill?: boolean;
    ImgOffsetX: number;
    ImgOffsetY: number;
}
