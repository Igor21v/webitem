import ArticleIcon from '@/shared/assets/icons/article-20-20.svg';

export type ElementTypes =
    'all' |
    ':type' |
    'accordion' |
    'alert' |
    'animation' |
    'accordion' |
    'avatar' |
    'badge' |
    'breadcrumbs'|
    'button' |
    'card' |
    'checkbox' |
    'image' |
    'label' |
    'link'|
    'modal'|
    'pagination'|
    'picker' |
    'progress'|
    'rating'|
    'radio_button'|
    'skeleton'|
    'select'|
    'slider'|
    'spinner'|
    'tabs'|
    'text_input'|
    'textarea'|
    'toggle'|
    'tooltip';

export interface ElementItemType {
    type: ElementTypes;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const elementsList: ElementItemType[] = [
        {
            text: 'Accordion',
            type: 'accordion',
            Icon: ArticleIcon,
        },
        {
            text: 'Alert',
            type: 'alert',
            Icon: ArticleIcon,
        },
        {
            text: 'Animation',
            type: 'animation',
            Icon: ArticleIcon,
        },
        {
            text: 'Avatar',
            type: 'avatar',
            Icon: ArticleIcon,
        },
        {
            text: 'Badge (Tag)',
            type: 'badge',
            Icon: ArticleIcon,
        },
        {
            text: 'Button',
            type: 'button',
            Icon: ArticleIcon,
        },
        {
            text: 'Breadcrumbs',
            type: 'breadcrumbs',
            Icon: ArticleIcon,
        },
        {
            text: 'Card',
            type: 'card',
            Icon: ArticleIcon,
        },
        {
            text: 'Checkbox',
            type: 'checkbox',
            Icon: ArticleIcon,
        },
        {
            text: 'Image',
            type: 'image',
            Icon: ArticleIcon,
        },
        {
            text: 'Label',
            type: 'label',
            Icon: ArticleIcon,
        },
        {
            text: 'Link',
            type: 'link',
            Icon: ArticleIcon,
        },
        {
            text: 'Modal',
            type: 'modal',
            Icon: ArticleIcon,
        },
        {
            text: 'Pagination',
            type: 'pagination',
            Icon: ArticleIcon,
        },
        {
            text: 'Color picker',
            type: 'picker',
            Icon: ArticleIcon,
        },
        {
            text: 'Progress',
            type: 'progress',
            Icon: ArticleIcon,
        },

        {
            text: 'Rating',
            type: 'rating',
            Icon: ArticleIcon,
        },
        {
            text: 'Radio button',
            type: 'radio_button',
            Icon: ArticleIcon,
        },
        {
            text: 'Skeleton',
            type: 'skeleton',
            Icon: ArticleIcon,
        },
        {
            text: 'Select',
            type: 'select',
            Icon: ArticleIcon,
        },
        {
            text: 'Slider',
            type: 'slider',
            Icon: ArticleIcon,
        },
        {
            text: 'Spinner',
            type: 'spinner',
            Icon: ArticleIcon,
        },
        {
            text: 'Tabs',
            type: 'tabs',
            Icon: ArticleIcon,
        },
        {
            text: 'Text input',
            type: 'text_input',
            Icon: ArticleIcon,
        },
        {
            text: 'Textarea',
            type: 'textarea',
            Icon: ArticleIcon,
        },
        {
            text: 'Toggle',
            type: 'toggle',
            Icon: ArticleIcon,
        },
        {
            text: 'Tooltip',
            type: 'tooltip',
            Icon: ArticleIcon,
        },
    ];

