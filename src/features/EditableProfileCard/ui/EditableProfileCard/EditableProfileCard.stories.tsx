import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { EditableProfileCard } from './EditableProfileCard';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { TEST_IMAGE } from '@/shared/const/tests';

export default {
    title: 'features/EditableProfileCard/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        StoreDecorator({
            profile: {
                form: {
                    first: 'Asd',
                    age: 23,
                    city: 'Test',
                    country: Country.Belarus,
                    lastname: 'Flcvb',
                    currency: Currency.EUR,
                    username: 'hhh',
                    avatar: TEST_IMAGE,
                },
            },
        }),
    ],
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => (
    <EditableProfileCard {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
