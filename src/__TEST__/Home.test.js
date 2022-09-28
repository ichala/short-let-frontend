import { cleanup, render } from '@testing-library/react';
import Home from '../Pages/Home/Home';

// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('HomePage shows the title text', () => {
  const home = render(
    <Home />,
  );

  expect(home.findByText('Find your dream place')).toBeTruthy();
});
