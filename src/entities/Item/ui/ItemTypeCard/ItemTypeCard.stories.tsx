import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { ItemTypeCard } from './ItemTypeCard';
import image from '@/shared/assets/tests/3D Card.png';

export default {
    title: 'entities/Item/ItemTypeCard',
    component: ItemTypeCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator()],
} as ComponentMeta<typeof ItemTypeCard>;

const Template: ComponentStory<typeof ItemTypeCard> = (args) => (
    <ItemTypeCard {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    itemType: {
        type: 'animation',
        img: image,
        ImgOffsetX: 0,
        ImgOffsetY: 0,
    },
};
