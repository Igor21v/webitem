import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/popups/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    value: '123',
    items: [
        { content: 'content123', value: '123' },
        { content: 'content456', value: '456' },
    ],
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    value: '123',
    direction: 'top left',
    items: [
        { content: 'content123', value: '123' },
        { content: 'content456', value: '456' },
    ],
};

export const TopRight = Template.bind({});
TopRight.args = {
    value: '123',
    direction: 'top right',
    items: [
        { content: 'content123', value: '123' },
        { content: 'content456', value: '456' },
    ],
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    value: '123',
    direction: 'bottom right',
    items: [
        { content: 'content123', value: '123' },
        { content: 'content456', value: '456' },
    ],
};

export const BottmLeft = Template.bind({});
BottmLeft.args = {
    value: '123',
    direction: 'bottom left',
    items: [
        { content: 'content123', value: '123' },
        { content: 'content456', value: '456' },
    ],
};
