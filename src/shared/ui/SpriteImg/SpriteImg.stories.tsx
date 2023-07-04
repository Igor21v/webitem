import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SpriteImg } from './SpriteImg';
import sprite from '@/shared/assets/tests/navbar_sprite.png';

export default {
    title: 'shared/SpriteImg',
    component: SpriteImg,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SpriteImg>;

const Template: ComponentStory<typeof SpriteImg> = (args) => (
    <SpriteImg {...args} />
);

export const First = Template.bind({});
First.args = {
    backgroundURL: sprite,
    heightSource: 32,
    widthSource: 32,
    offsetX: 0,
};

export const Second = Template.bind({});
Second.args = {
    backgroundURL: sprite,
    heightSource: 32,
    widthSource: 32,
    offsetX: 32,
};

export const Third = Template.bind({});
Third.args = {
    backgroundURL: sprite,
    heightSource: 32,
    widthSource: 32,
    offsetX: 64,
};
