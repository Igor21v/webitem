import { Story } from '@storybook/react';
// eslint-disable-next-line igor21v/layer-imports
import '@/app/styles/index.scss';
import './storybookStyles.scss';

export const StyleDecorator = (story: () => Story) => story();
