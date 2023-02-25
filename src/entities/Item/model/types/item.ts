import { User } from '@/entities/User';
import { ItemTypes } from '../consts/ItemList';
import { ItemBlockType } from '../consts/ItemConst';

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
    user: User;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ItemTypes[];
    blocks: ItemBlock[];
}
