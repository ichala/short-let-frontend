import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../redux/store';
import Hall from '../../Pages/Admin/Hall/index';

describe('Login', () => {
  it('should render the login page', () => {
    const app = renderer.create(
      <Provider store={store}>
        <Router>
          <Hall />
        </Router>
      </Provider>,
    );
    expect(app).toMatchSnapshot();
  });
});
