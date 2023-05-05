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
        img: 'http://localhost:8000/static/items/CSS Blossoming Flowers at Magical Night.png',
        type: 'animation',
        Icon: ItemIcon,
    },
    {
        img: 'http://localhost:8000/static/items/Home Snowflakes Background Animation Pure CSS.png',
        type: 'background',
        Icon: ItemIcon,
    },
    {
        img: 'http://localhost:8000/static/items/Button hover effect 2.png',
        type: 'button',
        Icon: ItemIcon,
    },
    {
        img: 'http://localhost:8000/static/items/Kippo Hover Card Effect.png',
        type: 'card',
        Icon: ItemIcon,
    },
    {
        img: 'http://localhost:8000/static/items/Style checkbox.png',
        type: 'checkbox',
        Icon: ItemIcon,
    },
    /*     {
        img: 'Color picker',
        type: 'picker',
        Icon: ItemIcon,
    }, */
    {
        img: 'http://localhost:8000/static/items/404 error page.png',
        type: 'error',
        Icon: ItemIcon,
    },
    {
        img: 'http://localhost:8000/static/items/3D glass weather icons.png',
        type: 'icon',
        Icon: ItemIcon,
    },
    {
        img: 'http://localhost:8000/static/items/Slide Sign In Sign Up form.png',
        type: 'input_form',
        Icon: ItemIcon,
    },
    {
        img: 'http://localhost:8000/static/items/Animated Social Links.png',
        type: 'text_link',
        Icon: ItemIcon,
    },
    {
        img: 'http://localhost:8000/static/items/The progress.png',
        type: 'loader',
        Icon: ItemIcon,
    },
    {
        img: 'http://localhost:8000/static/items/Hatchet Toss.png',
        type: 'mini_app',
        Icon: ItemIcon,
    },
    {
        img: 'http://localhost:8000/static/items/Modal.png',
        type: 'modal',
        Icon: ItemIcon,
    },
    {
        img: 'http://localhost:8000/static/items/Animated Tab Bar.png',
        type: 'menu_tabs_dropdown',
        Icon: ItemIcon,
    },
    {
        img: 'http://localhost:8000/static/items/Lotsa Notifications.png',
        type: 'notification',
        Icon: ItemIcon,
    },
    /*     {
        img: 'Pagination',
        type: 'pagination',
        Icon: ItemIcon,
    }, */
    {
        img: 'http://localhost:8000/static/items/Rating & Counter.png',
        type: 'rating',
        Icon: ItemIcon,
    },
    {
        img: 'http://localhost:8000/static/items/Radio Hopping.png',
        type: 'radio_button',
        Icon: ItemIcon,
    },
    {
        img: 'http://localhost:8000/static/items/Smooth Skeletons.png',
        type: 'skeleton',
        Icon: ItemIcon,
    },
    {
        img: 'http://localhost:8000/static/items/Range Slider Progress in Chrome with pure CSS.png',
        type: 'slider',
        Icon: ItemIcon,
    },
    {
        img: 'http://localhost:8000/static/items/Light and Dark Toggle With Morphing Icon.png',
        type: 'toggle',
        Icon: ItemIcon,
    },
    {
        img: 'http://localhost:8000/static/items/Tooltip.png',
        type: 'tooltip',
        Icon: ItemIcon,
    },
];
