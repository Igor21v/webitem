import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppIcon } from './AppIcon';

export default {
    title: 'shared/AppIcon',
    component: AppIcon,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppIcon>;

const Template: ComponentStory<typeof AppIcon> = (args) => (
    <AppIcon {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    width: 200,
};
