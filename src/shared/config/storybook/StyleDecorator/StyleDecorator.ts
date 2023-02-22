import { Story } from '@storybook/api';
import 'app/styles/index.scss';

export const StoryDecorator = (story: () => Story) => story();
