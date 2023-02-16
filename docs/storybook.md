## Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью storybook-addon-mock.

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:

-   `npm run storybook`

Пример:

```typescript jsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
```

### Проектом предусмотрены следующие декораторы:

#### Подключенные голобально в конфигурации Storybook:

-   StyleDecorator - подключение глобальных стилей `@/app/styles/index.scss`
-   ThemeDecorator - декоратор тем (по умолчанию Theme.LIGHT, можно переопределить в сторисе)
-   SuspenseDecorator - оборачивает компонент в Suspense `fallback={<div>...</div>}>`

#### Подключаемые опционально

-   RouterDecorator - подключение роутов
-   StoreDecorator - подключение стора
