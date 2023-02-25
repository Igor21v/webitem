import ItemIcon from '@/shared/assets/icons/item-20-20.svg';

export type ItemTypes =
    | 'all'
    | ':type'
    | 'accordion'
    | 'alert'
    | 'animation'
    | 'accordion'
    | 'avatar'
    | 'badge'
    | 'breadcrumbs'
    | 'button'
    | 'card'
    | 'checkbox'
    | 'image'
    | 'label'
    | 'link'
    | 'modal'
    | 'pagination'
    | 'picker'
    | 'progress'
    | 'rating'
    | 'radio_button'
    | 'skeleton'
    | 'select'
    | 'slider'
    | 'spinner'
    | 'tabs'
    | 'text_input'
    | 'textarea'
    | 'toggle'
    | 'tooltip';

export interface ItemType {
    type: ItemTypes;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const elementList: ItemType[] = [
    {
        text: 'Accordion',
        type: 'accordion',
        Icon: ItemIcon,
    },
    {
        text: 'Alert',
        type: 'alert',
        Icon: ItemIcon,
    },
    {
        text: 'Animation',
        type: 'animation',
        Icon: ItemIcon,
    },
    {
        text: 'Avatar',
        type: 'avatar',
        Icon: ItemIcon,
    },
    {
        text: 'Badge (Tag)',
        type: 'badge',
        Icon: ItemIcon,
    },
    {
        text: 'Button',
        type: 'button',
        Icon: ItemIcon,
    },
    {
        text: 'Breadcrumbs',
        type: 'breadcrumbs',
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
        text: 'Image',
        type: 'image',
        Icon: ItemIcon,
    },
    {
        text: 'Label',
        type: 'label',
        Icon: ItemIcon,
    },
    {
        text: 'Link',
        type: 'link',
        Icon: ItemIcon,
    },
    {
        text: 'Modal',
        type: 'modal',
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
        text: 'Progress',
        type: 'progress',
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
        text: 'Tabs',
        type: 'tabs',
        Icon: ItemIcon,
    },
    {
        text: 'Text input',
        type: 'text_input',
        Icon: ItemIcon,
    },
    {
        text: 'Textarea',
        type: 'textarea',
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
