import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import Halls from '../Pages/Halls/Halls';

describe('Login', () => {
  it('should render the login page', () => {
    const app = render(
      <Provider store={store}>
        <Router>
          <Halls />
        </Router>
      </Provider>,
    );
    expect(app).toMatchSnapshot();
  });
});
