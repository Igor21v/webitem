import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TEST_SPITE_IMAGE } from '@/shared/const/tests';
import { SpriteImg } from './SpriteImg';

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
    backgroundURL: TEST_SPITE_IMAGE,
    heightSource: 32,
    widthSource: 32,
    offsetX: 0,
};

export const Second = Template.bind({});
Second.args = {
    backgroundURL: TEST_SPITE_IMAGE,
    heightSource: 32,
    widthSource: 32,
    offsetX: 32,
};

export const Third = Template.bind({});
Third.args = {
    backgroundURL: TEST_SPITE_IMAGE,
    heightSource: 32,
    widthSource: 32,
    offsetX: 64,
};
