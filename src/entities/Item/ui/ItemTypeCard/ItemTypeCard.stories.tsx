import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { ItemTypeCard } from './ItemTypeCard';
import { TEST_IMAGE } from '@/shared/const/tests';

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
        img: TEST_IMAGE,
        ImgOffsetX: 0,
        ImgOffsetY: 0,
        positionRu: 1,
    },
};
