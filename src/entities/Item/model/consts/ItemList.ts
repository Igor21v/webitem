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
    | 'label'
    | 'link_text'
    | 'loader'
    | 'mini_app'
    | 'modal'
    | 'navigation_tabs'
    | 'notification'
    | 'pagination'
    | 'picker'
    | 'progress'
    | 'rating'
    | 'radio_button'
    | 'skeleton'
    | 'select'
    | 'slider'
    | 'spinner'
    | 'input'
    | 'toggle'
    | 'tooltip';

export interface ItemType {
    type: ItemTypes;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const itemList: ItemType[] = [
    {
        text: 'Accordion',
        type: 'accordion',
        Icon: ItemIcon,
    },
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
        text: 'Input',
        type: 'input',
        Icon: ItemIcon,
    },
    {
        text: 'Link/Text',
        type: 'link_text',
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
        text: 'Navigation/Tabs',
        type: 'navigation_tabs',
        Icon: ItemIcon,
    },
    {
        text: 'Notification',
        type: 'notification',
        Icon: ItemIcon,
    },
    {
        text: 'Pagination',
        type: 'pagination',
        Icon: ItemIcon,
    },
    {
        text: 'Color picker',
        type: 'picker',
        Icon: ItemIcon,
    },
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
        text: 'Select',
        type: 'select',
        Icon: ItemIcon,
    },
    {
        text: 'Slider',
        type: 'slider',
        Icon: ItemIcon,
    },
    {
        text: 'Spinner',
        type: 'spinner',
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
