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
    text: string;
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
        text: 'Animation',
        type: 'animation',
        Icon: ItemIcon,
    },
    {
        text: 'Background',
        type: 'background',
        Icon: ItemIcon,
    },
    {
        text: 'Button',
        type: 'button',
        Icon: ItemIcon,
    },
    {
        text: 'Card',
        type: 'card',
        Icon: ItemIcon,
    },
    {
        text: 'Checkbox',
        type: 'checkbox',
        Icon: ItemIcon,
    },
    /*     {
        text: 'Color picker',
        type: 'picker',
        Icon: ItemIcon,
    }, */
    {
        text: 'Error',
        type: 'error',
        Icon: ItemIcon,
    },
    {
        text: 'Icon',
        type: 'icon',
        Icon: ItemIcon,
    },
    {
        text: 'Input/Form',
        type: 'input_form',
        Icon: ItemIcon,
    },
    {
        text: 'Text/Link',
        type: 'text_link',
        Icon: ItemIcon,
    },
    {
        text: 'Loader/Progress',
        type: 'loader',
        Icon: ItemIcon,
    },
    {
        text: 'Mini app',
        type: 'mini_app',
        Icon: ItemIcon,
    },
    {
        text: 'Modal',
        type: 'modal',
        Icon: ItemIcon,
    },
    {
        text: 'Menu/Tabs/Dropdown',
        type: 'menu_tabs_dropdown',
        Icon: ItemIcon,
    },
    {
        text: 'Notification',
        type: 'notification',
        Icon: ItemIcon,
    },
    /*     {
        text: 'Pagination',
        type: 'pagination',
        Icon: ItemIcon,
    }, */
    {
        text: 'Rating',
        type: 'rating',
        Icon: ItemIcon,
    },
    {
        text: 'Radio button',
        type: 'radio_button',
        Icon: ItemIcon,
    },
    {
        text: 'Skeleton',
        type: 'skeleton',
        Icon: ItemIcon,
    },
    {
        text: 'Slider',
        type: 'slider',
        Icon: ItemIcon,
    },
    {
        text: 'Toggle',
        type: 'toggle',
        Icon: ItemIcon,
    },
    {
        text: 'Tooltip',
        type: 'tooltip',
        Icon: ItemIcon,
    },
];
