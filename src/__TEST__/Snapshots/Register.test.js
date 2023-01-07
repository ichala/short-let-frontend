import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../redux/store';
import Register from '../../Pages/Auth/Register';

describe('Register', () => {
  it('should render the Register page', () => {
    const app = render(
      <Provider store={store}>
        <Router>
          <Register />
        </Router>
      </Provider>,
    );
    expect(app).toMatchSnapshot();
  });
});
