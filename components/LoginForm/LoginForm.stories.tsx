import React from 'react';
import LoginForm from './LoginForm';

export default {
  title: 'Components/LoginForm',
  component: LoginForm,
  parameters: {
    docs: {
      description: {
        component: 'LoginForm',
      },
    },
  },
};
const Template = () => <LoginForm onSubmit={console.log} loading={false} />;

export const LoginFormStory = Template.bind({});
