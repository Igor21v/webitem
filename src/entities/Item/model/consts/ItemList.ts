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
    authOnly?: boolean;
}

export const itemList: ItemType[] = [
    /*     {
        text: 'Accordion',
        type: 'accordion',
    }, */
    {
        img: `${__STATIC_URL__}/items/CSS Blossoming Flowers at Magical Night.png`,
        type: 'animation',
    },
    {
        img: `${__STATIC_URL__}/items/Home Snowflakes Background Animation Pure CSS.png`,
        type: 'background',
    },
    {
        img: `${__STATIC_URL__}/items/Button hover effect 2.png`,
        type: 'button',
    },
    {
        img: `${__STATIC_URL__}/items/Kippo Hover Card Effect.png`,
        type: 'card',
    },
    {
        img: `${__STATIC_URL__}/items/Style checkbox.png`,
        type: 'checkbox',
    },
    /*     {
        img: 'Color picker',
        type: 'picker',
    }, */
    {
        img: `${__STATIC_URL__}/items/404 error page.png`,
        type: 'error',
    },
    {
        img: `${__STATIC_URL__}/items/3D glass weather icons.png`,
        type: 'icon',
    },
    {
        img: `${__STATIC_URL__}/items/Slide Sign In Sign Up form.png`,
        type: 'input_form',
    },
    {
        img: `${__STATIC_URL__}/items/Animated Social Links.png`,
        type: 'text_link',
    },
    {
        img: `${__STATIC_URL__}/items/The progress.png`,
        type: 'loader',
    },
    {
        img: `${__STATIC_URL__}/items/Hatchet Toss.png`,
        type: 'mini_app',
    },
    {
        img: `${__STATIC_URL__}/items/Modal.png`,
        type: 'modal',
    },
    {
        img: `${__STATIC_URL__}/items/Animated Tab Bar.png`,
        type: 'menu_tabs_dropdown',
    },
    {
        img: `${__STATIC_URL__}/items/Lotsa Notifications.png`,
        type: 'notification',
    },
    /*     {
        img: 'Pagination',
        type: 'pagination',
    }, */
    {
        img: `${__STATIC_URL__}/items/Rating & Counter.png`,
        type: 'rating',
    },
    {
        img: `${__STATIC_URL__}/items/Radio Hopping.png`,
        type: 'radio_button',
    },
    {
        img: `${__STATIC_URL__}/items/Smooth Skeletons.png`,
        type: 'skeleton',
    },
    {
        img: `${__STATIC_URL__}/items/Range Slider Progress in Chrome with pure CSS.png`,
        type: 'slider',
    },
    {
        img: `${__STATIC_URL__}/items/Light and Dark Toggle With Morphing Icon.png`,
        type: 'toggle',
    },
    {
        img: `${__STATIC_URL__}/items/Tooltip.png`,
        type: 'tooltip',
    },
];
