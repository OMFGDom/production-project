import { ComponentStory, ComponentMeta } from '@storybook/react';
import AboutPage from './AboutPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    }
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = (args: typeof AboutPage) => <AboutPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};  // Initialize with an empty object

export const Dark = Template.bind({});
Dark.args = {};  // Initialize with an empty object
Dark.decorators = [ThemeDecorator(Theme.DARK)];
