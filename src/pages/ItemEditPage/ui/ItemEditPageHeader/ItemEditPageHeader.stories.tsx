import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ItemEditPageHeader } from './ItemEditPageHeader';

export default {
    title: 'pages/ItemEditPageHeader',
    component: ItemEditPageHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ItemEditPageHeader>;

const Template: ComponentStory<typeof ItemEditPageHeader> = (args) => (
    <ItemEditPageHeader {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
