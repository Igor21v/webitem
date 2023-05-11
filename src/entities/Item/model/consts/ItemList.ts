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
        ImgOffsetX: 96,
        ImgOffsetY: 0,
    },
    {
        img: `${__STATIC_URL__}/items/Style checkbox.png`,
        type: 'checkbox',
        ImgOffsetX: 128,
        ImgOffsetY: 0,
    },
    /*     {
        img: 'Color picker',
        type: 'picker',
    }, */
    {
        img: `${__STATIC_URL__}/items/404 error page.png`,
        type: 'error',
        ImgOffsetX: 160,
        ImgOffsetY: 0,
    },
    {
        img: `${__STATIC_URL__}/items/3D glass weather icons.png`,
        type: 'icon',
        ImgOffsetX: 192,
        ImgOffsetY: 0,
    },
    {
        img: `${__STATIC_URL__}/items/Slide Sign In Sign Up form.png`,
        type: 'input_form',
        ImgOffsetX: 224,
        ImgOffsetY: 0,
    },
    {
        img: `${__STATIC_URL__}/items/Animated Social Links.png`,
        type: 'text_link',
        ImgOffsetX: 544,
        ImgOffsetY: 0,
    },
    {
        img: `${__STATIC_URL__}/items/The progress.png`,
        type: 'loader',
        ImgOffsetX: 256,
        ImgOffsetY: 0,
    },
    {
        img: `${__STATIC_URL__}/items/Hatchet Toss.png`,
        type: 'mini_app',
        ImgOffsetX: 320,
        ImgOffsetY: 0,
    },
    {
        img: `${__STATIC_URL__}/items/Modal.png`,
        type: 'modal',
        ImgOffsetX: 352,
        ImgOffsetY: 0,
    },
    {
        img: `${__STATIC_URL__}/items/Animated Tab Bar.png`,
        type: 'menu_tabs_dropdown',
        ImgOffsetX: 288,
        ImgOffsetY: 0,
    },
    {
        img: `${__STATIC_URL__}/items/Lotsa Notifications.png`,
        type: 'notification',
        ImgOffsetX: 384,
        ImgOffsetY: 0,
    },
    /*     {
        img: 'Pagination',
        type: 'pagination',
    }, */
    {
        img: `${__STATIC_URL__}/items/Rating & Counter.png`,
        type: 'rating',
        ImgOffsetX: 448,
        ImgOffsetY: 0,
    },
    {
        img: `${__STATIC_URL__}/items/Radio Hopping.png`,
        type: 'radio_button',
        ImgOffsetX: 416,
        ImgOffsetY: 0,
    },
    {
        img: `${__STATIC_URL__}/items/Smooth Skeletons.png`,
        type: 'skeleton',
        ImgOffsetX: 480,
        ImgOffsetY: 0,
    },
    {
        img: `${__STATIC_URL__}/items/Range Slider Progress in Chrome with pure CSS.png`,
        type: 'slider',
        ImgOffsetX: 512,
        ImgOffsetY: 0,
    },
    {
        img: `${__STATIC_URL__}/items/Light and Dark Toggle With Morphing Icon.png`,
        type: 'toggle',
        ImgOffsetX: 576,
        ImgOffsetY: 0,
    },
    {
        img: `${__STATIC_URL__}/items/Tooltip.png`,
        type: 'tooltip',
        ImgOffsetX: 608,
        ImgOffsetY: 0,
    },
];
