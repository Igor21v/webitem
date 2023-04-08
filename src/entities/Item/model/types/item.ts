import { CodesContentType } from '@/shared/types/codes';
import { ItemBlockType } from '../consts/ItemConst';
import { ItemTypes } from '../consts/ItemList';

export interface ItemBlockBase {
    id: string;
    type: ItemBlockType;
}

export interface ItemCodeBlock extends ItemBlockBase {
    type: ItemBlockType.CODE;
    code: string;
}

export interface ItemImageBlock extends ItemBlockBase {
    type: ItemBlockType.IMAGE;
    src: string;
    title: string;
}

export interface ItemTextBlock extends ItemBlockBase {
    type: ItemBlockType.TEXT;
    paragraphs: string[];
    title?: string;
}

export type ItemBlock = ItemCodeBlock | ItemImageBlock | ItemTextBlock;

export interface Item {
    id: string;
    title: string;
    description?: string;
    img?: string;
    imgAnim?: string;
    type?: ItemTypes;
    views: number;
    createdAt: string;
    codes: CodesContentType;
    useSize?: boolean;
    width?: number;
    height?: number;
}
