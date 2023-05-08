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
    icon: string;
    authOnly?: boolean;
}

export const itemList: ItemType[] = [
    /*     {
        text: 'Accordion',
        type: 'accordion',
        icon: `${__STATIC_URL__}/icons/Edit_Text_32.png`,
    }, */
    {
        img: `${__STATIC_URL__}/items/CSS Blossoming Flowers at Magical Night.png`,
        type: 'animation',
        icon: `${__STATIC_URL__}/icons/Edit_Text_32.png`,
    },
    {
        img: `${__STATIC_URL__}/items/Home Snowflakes Background Animation Pure CSS.png`,
        type: 'background',
        icon: `${__STATIC_URL__}/icons/Edit_Text_32.png`,
    },
    {
        img: `${__STATIC_URL__}/items/Button hover effect 2.png`,
        type: 'button',
        icon: `${__STATIC_URL__}/icons/Edit_Text_32.png`,
    },
    {
        img: `${__STATIC_URL__}/items/Kippo Hover Card Effect.png`,
        type: 'card',
        icon: `${__STATIC_URL__}/icons/Edit_Text_32.png`,
    },
    {
        img: `${__STATIC_URL__}/items/Style checkbox.png`,
        type: 'checkbox',
        icon: `${__STATIC_URL__}/icons/Edit_Text_32.png`,
    },
    /*     {
        img: 'Color picker',
        type: 'picker',
        icon: `${__STATIC_URL__}/icons/Edit_Text_32.png`,
    }, */
    {
        img: `${__STATIC_URL__}/items/404 error page.png`,
        type: 'error',
        icon: `${__STATIC_URL__}/icons/Edit_Text_32.png`,
    },
    {
        img: `${__STATIC_URL__}/items/3D glass weather icons.png`,
        type: 'icon',
        icon: `${__STATIC_URL__}/icons/Edit_Text_32.png`,
    },
    {
        img: `${__STATIC_URL__}/items/Slide Sign In Sign Up form.png`,
        type: 'input_form',
        icon: `${__STATIC_URL__}/icons/Edit_Text_32.png`,
    },
    {
        img: `${__STATIC_URL__}/items/Animated Social Links.png`,
        type: 'text_link',
        icon: `${__STATIC_URL__}/icons/Edit_Text_32.png`,
    },
    {
        img: `${__STATIC_URL__}/items/The progress.png`,
        type: 'loader',
        icon: `${__STATIC_URL__}/icons/Edit_Text_32.png`,
    },
    {
        img: `${__STATIC_URL__}/items/Hatchet Toss.png`,
        type: 'mini_app',
        icon: `${__STATIC_URL__}/icons/Edit_Text_32.png`,
    },
    {
        img: `${__STATIC_URL__}/items/Modal.png`,
        type: 'modal',
        icon: `${__STATIC_URL__}/icons/Edit_Text_32.png`,
    },
    {
        img: `${__STATIC_URL__}/items/Animated Tab Bar.png`,
        type: 'menu_tabs_dropdown',
        icon: `${__STATIC_URL__}/icons/Edit_Text_32.png`,
    },
    {
        img: `${__STATIC_URL__}/items/Lotsa Notifications.png`,
        type: 'notification',
        icon: `${__STATIC_URL__}/icons/Edit_Text_32.png`,
    },
    /*     {
        img: 'Pagination',
        type: 'pagination',
        icon: `${__STATIC_URL__}/icons/Edit_Text_32.png`,
    }, */
    {
        img: `${__STATIC_URL__}/items/Rating & Counter.png`,
        type: 'rating',
        icon: `${__STATIC_URL__}/icons/Edit_Text_32.png`,
    },
    {
        img: `${__STATIC_URL__}/items/Radio Hopping.png`,
        type: 'radio_button',
        icon: `${__STATIC_URL__}/icons/Edit_Text_32.png`,
    },
    {
        img: `${__STATIC_URL__}/items/Smooth Skeletons.png`,
        type: 'skeleton',
        icon: `${__STATIC_URL__}/icons/Edit_Text_32.png`,
    },
    {
        img: `${__STATIC_URL__}/items/Range Slider Progress in Chrome with pure CSS.png`,
        type: 'slider',
        icon: `${__STATIC_URL__}/icons/Edit_Text_32.png`,
    },
    {
        img: `${__STATIC_URL__}/items/Light and Dark Toggle With Morphing Icon.png`,
        type: 'toggle',
        icon: `${__STATIC_URL__}/icons/Edit_Text_32.png`,
    },
    {
        img: `${__STATIC_URL__}/items/Tooltip.png`,
        type: 'tooltip',
        icon: `${__STATIC_URL__}/icons/Edit_Text_32.png`,
    },
];
