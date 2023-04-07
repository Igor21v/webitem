import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SizePreview } from './SizePreview';

export default {
    title: 'features/SizePreview',
    component: SizePreview,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SizePreview>;

const Template: ComponentStory<typeof SizePreview> = (args) => (
    <SizePreview {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
