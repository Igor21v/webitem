import { ComponentStory, ComponentMeta } from '@storybook/react';
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

export const Normal = Template.bind({});
Normal.args = {};
