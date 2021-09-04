import React from 'react';
import { mockPostgresMovie } from '../../__mocks__/fakePostgresMovies';
import MuiTheme from '../MuiTheme/MuiTheme';
import { Banner } from './Banner';

import '../../styles/resets.styles.css';

export default {
  title: 'Components/Banner',
  component: Banner,
  parameters: {
    docs: {
      description: {
        component: 'Banner',
      },
    },
  },
};
const Template = () => (
  <MuiTheme>
    <Banner movie={mockPostgresMovie} />
  </MuiTheme>
);

export const LoginFormStory = Template.bind({});
