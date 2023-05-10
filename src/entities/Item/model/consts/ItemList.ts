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
    ImgOffsetX: number;
    ImgOffsetY: number;
}

export const itemList: ItemType[] = [
    /*     {
        text: 'Accordion',
        type: 'accordion',
    }, */
    {
        img: `${__STATIC_URL__}/items/CSS Blossoming Flowers at Magical Night.png`,
        type: 'animation',
        ImgOffsetX: 0,
        ImgOffsetY: 0,
    },
    {
        img: `${__STATIC_URL__}/items/Home Snowflakes Background Animation Pure CSS.png`,
        type: 'background',
        ImgOffsetX: 32,
        ImgOffsetY: 0,
    },
    {
        img: `${__STATIC_URL__}/items/Button hover effect 2.png`,
        type: 'button',
        ImgOffsetX: 64,
        ImgOffsetY: 0,
    },
    {
        img: `${__STATIC_URL__}/items/Kippo Hover Card Effect.png`,
        type: 'card',
        ImgOffsetX: 0,
        ImgOffsetY: 0,
    },
    {
        img: `${__STATIC_URL__}/items/Style checkbox.png`,
        type: 'checkbox',
        ImgOffsetX: 0,
        ImgOffsetY: 0,
    },
    /*     {
        img: 'Color picker',
        type: 'picker',
    }, */
    {
        img: `${__STATIC_URL__}/items/404 error page.png`,
        type: 'error',
        ImgOffsetX: 0,
        ImgOffsetY: 0,
    },
    {
        img: `${__STATIC_URL__}/items/3D glass weather icons.png`,
        type: 'icon',
        ImgOffsetX: 0,
        ImgOffsetY: 0,
    },
    {
        img: `${__STATIC_URL__}/items/Slide Sign In Sign Up form.png`,
        type: 'input_form',
        ImgOffsetX: 0,
        ImgOffsetY: 0,
    },
    {
        img: `${__STATIC_URL__}/items/Animated Social Links.png`,
        type: 'text_link',
        ImgOffsetX: 0,
        ImgOffsetY: 0,
    },
    {
        img: `${__STATIC_URL__}/items/The progress.png`,
        type: 'loader',
        ImgOffsetX: 0,
        ImgOffsetY: 0,
    },
    {
        img: `${__STATIC_URL__}/items/Hatchet Toss.png`,
        type: 'mini_app',
        ImgOffsetX: 0,
        ImgOffsetY: 0,
    },
    {
        img: `${__STATIC_URL__}/items/Modal.png`,
        type: 'modal',
        ImgOffsetX: 0,
        ImgOffsetY: 0,
    },
    {
        img: `${__STATIC_URL__}/items/Animated Tab Bar.png`,
        type: 'menu_tabs_dropdown',
        ImgOffsetX: 0,
        ImgOffsetY: 0,
    },
    {
        img: `${__STATIC_URL__}/items/Lotsa Notifications.png`,
        type: 'notification',
        ImgOffsetX: 0,
        ImgOffsetY: 0,
    },
    /*     {
        img: 'Pagination',
        type: 'pagination',
    }, */
    {
        img: `${__STATIC_URL__}/items/Rating & Counter.png`,
        type: 'rating',
        ImgOffsetX: 0,
        ImgOffsetY: 0,
    },
    {
        img: `${__STATIC_URL__}/items/Radio Hopping.png`,
        type: 'radio_button',
        ImgOffsetX: 0,
        ImgOffsetY: 0,
    },
    {
        img: `${__STATIC_URL__}/items/Smooth Skeletons.png`,
        type: 'skeleton',
        ImgOffsetX: 0,
        ImgOffsetY: 0,
    },
    {
        img: `${__STATIC_URL__}/items/Range Slider Progress in Chrome with pure CSS.png`,
        type: 'slider',
        ImgOffsetX: 0,
        ImgOffsetY: 0,
    },
    {
        img: `${__STATIC_URL__}/items/Light and Dark Toggle With Morphing Icon.png`,
        type: 'toggle',
        ImgOffsetX: 0,
        ImgOffsetY: 0,
    },
    {
        img: `${__STATIC_URL__}/items/Tooltip.png`,
        type: 'tooltip',
        ImgOffsetX: 0,
        ImgOffsetY: 0,
    },
];
