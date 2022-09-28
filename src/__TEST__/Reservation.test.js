import { cleanup, render } from '@testing-library/react';
import Reservation from '../Pages/Reservation/Reservation';

// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('Reservation page shows the title text', () => {
  const reservation = render(<Reservation />);

  expect(reservation.findByText('Choose a date')).toBeTruthy();
});

it('Reservation page has a next button', () => {
  const reservation = render(<Reservation />);

  expect(reservation.findByText('next')).toBeTruthy();
});
