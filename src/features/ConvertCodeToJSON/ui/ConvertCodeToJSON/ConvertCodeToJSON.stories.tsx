import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ConvertCodeToJSON } from './ConvertCodeToJSON';

export default {
    title: 'features/ConvertCodeToJSON',
    component: ConvertCodeToJSON,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ConvertCodeToJSON>;

const Template: ComponentStory<typeof ConvertCodeToJSON> = (args) => (
    <ConvertCodeToJSON {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
