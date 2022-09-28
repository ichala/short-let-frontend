import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import Login from '../Pages/Auth/Login';
import store from '../redux/store';

// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('Login shows the title text', () => {
  const login = render(
    <>
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    </>,
  );

  expect(login.findByText('Login')).toBeTruthy();
});

it('Login page shows a signup button', () => {
  const login = render(
    <>
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    </>,
  );

  expect(login.findByText('Login')).toBeTruthy();
});
