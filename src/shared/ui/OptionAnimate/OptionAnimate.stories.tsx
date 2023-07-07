import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TEST_ANIMATION, TEST_IMAGE } from '@/shared/const/tests';
import { OptionAnimate } from './OptionAnimate';

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
    src: TEST_IMAGE,
    animateSrc: TEST_ANIMATION,
};
