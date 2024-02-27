import { itemTypeImg } from './itemTypeImg';
import { ItemTypes } from './ItemTypes';

export interface ItemType {
    type: ItemTypes;
    img: string;
    ImgOffsetX: number;
    ImgOffsetY: number;
    positionRu: number; // Позиция в списке при Русском языке
}

export const itemList: ItemType[] = [
    {
        img: itemTypeImg.animation,
        type: 'animation',
        ImgOffsetX: 0,
        ImgOffsetY: 0,
        positionRu: 0,
    },
    {
        img: itemTypeImg.background,
        type: 'background',
        ImgOffsetX: 32,
        ImgOffsetY: 0,
        positionRu: 100,
    },
    {
        img: itemTypeImg.button,
        type: 'button',
        ImgOffsetX: 64,
        ImgOffsetY: 0,
        positionRu: 20,
    },
    {
        img: itemTypeImg.card,
        type: 'card',
        ImgOffsetX: 96,
        ImgOffsetY: 0,
        positionRu: 15,
    },
    {
        img: itemTypeImg.checkbox,
        type: 'checkbox',
        ImgOffsetX: 128,
        ImgOffsetY: 0,
        positionRu: 105,
    },
    {
        img: itemTypeImg.error,
        type: 'error',
        ImgOffsetX: 160,
        ImgOffsetY: 0,
        positionRu: 40,
    },
    {
        img: itemTypeImg.icon,
        type: 'icon',
        ImgOffsetX: 192,
        ImgOffsetY: 0,
        positionRu: 10,
    },
    {
        img: itemTypeImg.input_form,
        type: 'input_form',
        ImgOffsetX: 224,
        ImgOffsetY: 0,
        positionRu: 61,
    },
    {
        img: itemTypeImg.text_link,
        type: 'text_link',
        ImgOffsetX: 544,
        ImgOffsetY: 0,
        positionRu: 75,
    },
    {
        img: itemTypeImg.loader,
        type: 'loader',
        ImgOffsetX: 256,
        ImgOffsetY: 0,
        positionRu: 5,
    },
    {
        img: itemTypeImg.mini_app,
        type: 'mini_app',
        ImgOffsetX: 320,
        ImgOffsetY: 0,
        positionRu: 30,
    },
    {
        img: itemTypeImg.modal,
        type: 'modal',
        ImgOffsetX: 352,
        ImgOffsetY: 0,
        positionRu: 35,
    },
    {
        img: itemTypeImg.menu_tabs_dropdown,
        type: 'menu_tabs_dropdown',
        ImgOffsetX: 288,
        ImgOffsetY: 0,
        positionRu: 25,
    },
    {
        img: itemTypeImg.notification,
        type: 'notification',
        ImgOffsetX: 384,
        ImgOffsetY: 0,
        positionRu: 90,
    },
    {
        img: itemTypeImg.rating,
        type: 'rating',
        ImgOffsetX: 448,
        ImgOffsetY: 0,
        positionRu: 60,
    },
    {
        img: itemTypeImg.radio_button,
        type: 'radio_button',
        ImgOffsetX: 416,
        ImgOffsetY: 0,
        positionRu: 65,
    },
    {
        img: itemTypeImg.skeleton,
        type: 'skeleton',
        ImgOffsetX: 480,
        ImgOffsetY: 0,
        positionRu: 70,
    },
    {
        img: itemTypeImg.loader,
        type: 'slider',
        ImgOffsetX: 512,
        ImgOffsetY: 0,
        positionRu: 55,
    },
    {
        img: itemTypeImg.toggle,
        type: 'toggle',
        ImgOffsetX: 576,
        ImgOffsetY: 0,
        positionRu: 45,
    },
    {
        img: itemTypeImg.tooltip,
        type: 'tooltip',
        ImgOffsetX: 608,
        ImgOffsetY: 0,
        positionRu: 50,
    },
];
