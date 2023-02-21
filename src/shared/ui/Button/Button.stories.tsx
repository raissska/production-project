import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ThemeButton } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

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
  theme: ThemeButton.CLEAR,
};


export const OutLine = Template.bind({});
OutLine.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINE,
};


export const OutLineDark = Template.bind({});
OutLineDark.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINE,
};
OutLineDark.decorators = [ThemeDecorator(Theme.DARK)]