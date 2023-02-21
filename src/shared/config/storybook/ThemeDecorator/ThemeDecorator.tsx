import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';


export const ThemeDecorator = (theme: Theme) => (StoryComponenet: Story) => (
  <div className={`app ${theme}`}>
    <StoryComponenet />
  </div>
);