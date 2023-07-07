import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { AvatarDropdown } from './AvatarDropdown';
import { UserRole } from '@/entities/User';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { TEST_IMAGE } from '@/shared/const/tests';

export default {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        StoreDecorator({
            user: {
                authData: {
                    avatar: TEST_IMAGE,
                    id: '1',
                    roles: [UserRole.ADMIN],
                    username: 'Admin',
                },
            },
        }),
        (Story) => (
            <div style={{ display: 'flex', justifyContent: 'end' }}>
                <Story />
            </div>
        ),
        RouterDecorator(),
    ],
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => (
    <AvatarDropdown {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
