import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import Register from '../Pages/Auth/Register';
import store from '../redux/store';

// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('Register shows the title text', () => {
  const register = render(
    <>
      <Provider store={store}>
        <Router>
          <Register />
        </Router>
      </Provider>
    </>,
  );

  expect(register.findByText('Sign Up')).toBeTruthy();
});

it('Register page shows a signup button', () => {
  const register = render(
    <>
      <Provider store={store}>
        <Router>
          <Register />
        </Router>
      </Provider>
    </>,
  );

  expect(register.findByText('signup')).toBeTruthy();
});
