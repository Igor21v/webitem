import { ComponentStory, ComponentMeta } from '@storybook/react';
import { OptionAnimate } from './OptionAnimate';
import image from '@/shared/assets/tests/3D Card.png';
import animate from '@/shared/assets/tests/3D Card.gif';

export default {
    title: 'shared/OptionAnimate',
    component: OptionAnimate,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof OptionAnimate>;

const Template: ComponentStory<typeof OptionAnimate> = (args) => (
    <OptionAnimate {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    src: image,
    animateSrc: animate,
};
