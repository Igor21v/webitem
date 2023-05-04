import ItemIcon from '@/shared/assets/icons/item-20-20.svg';

export type ItemTypes =
    | 'all'
    | ':type'
    | 'not selected'
    | 'accordion'
    | 'alert'
    | 'animation'
    | 'background'
    | 'button'
    | 'card'
    | 'checkbox'
    | 'error'
    | 'icon'
    | 'img_link'
    | 'input_form'
    | 'text_link'
    | 'label'
    | 'loader'
    | 'mini_app'
    | 'modal'
    | 'menu_tabs_dropdown'
    | 'notification'
    | 'pagination'
    | 'picker'
    | 'progress'
    | 'rating'
    | 'radio_button'
    | 'skeleton'
    | 'slider'
    | 'toggle'
    | 'tooltip';

export interface ItemType {
    type: ItemTypes;
    img: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const itemList: ItemType[] = [
    /*     {
        text: 'Accordion',
        type: 'accordion',
        Icon: ItemIcon,
    }, */
    {
        img: 'Animation',
        type: 'animation',
        Icon: ItemIcon,
    },
    {
        img: 'Background',
        type: 'background',
        Icon: ItemIcon,
    },
    {
        img: 'Button',
        type: 'button',
        Icon: ItemIcon,
    },
    {
        img: 'Card',
        type: 'card',
        Icon: ItemIcon,
    },
    {
        img: 'Checkbox',
        type: 'checkbox',
        Icon: ItemIcon,
    },
    /*     {
        img: 'Color picker',
        type: 'picker',
        Icon: ItemIcon,
    }, */
    {
        img: 'Error',
        type: 'error',
        Icon: ItemIcon,
    },
    {
        img: 'Icon',
        type: 'icon',
        Icon: ItemIcon,
    },
    {
        img: 'Input/Form',
        type: 'input_form',
        Icon: ItemIcon,
    },
    {
        img: 'img/Link',
        type: 'img_link',
        Icon: ItemIcon,
    },
    {
        img: 'Loader/Progress',
        type: 'loader',
        Icon: ItemIcon,
    },
    {
        img: 'Mini app',
        type: 'mini_app',
        Icon: ItemIcon,
    },
    {
        img: 'Modal',
        type: 'modal',
        Icon: ItemIcon,
    },
    {
        img: 'Menu/Tabs/Dropdown',
        type: 'menu_tabs_dropdown',
        Icon: ItemIcon,
    },
    {
        img: 'Notification',
        type: 'notification',
        Icon: ItemIcon,
    },
    /*     {
        img: 'Pagination',
        type: 'pagination',
        Icon: ItemIcon,
    }, */
    {
        img: 'Rating',
        type: 'rating',
        Icon: ItemIcon,
    },
    {
        img: 'Radio button',
        type: 'radio_button',
        Icon: ItemIcon,
    },
    {
        img: 'Skeleton',
        type: 'skeleton',
        Icon: ItemIcon,
    },
    {
        img: 'Slider',
        type: 'slider',
        Icon: ItemIcon,
    },
    {
        img: 'Toggle',
        type: 'toggle',
        Icon: ItemIcon,
    },
    {
        img: 'Tooltip',
        type: 'tooltip',
        Icon: ItemIcon,
    },
];
