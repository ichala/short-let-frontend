import { cleanup, render } from '@testing-library/react';
import Profile from '../Pages/Users/Profile';

// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('Profile shows the title text', () => {
  const profile = render(<Profile />);

  expect(profile.findByText('Update your profile info')).toBeTruthy();
});

it('Profile shows the update button', () => {
  const profile = render(<Profile />);

  expect(profile.findByText('update')).toBeTruthy();
});
