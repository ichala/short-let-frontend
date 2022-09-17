import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedIn } from './redux/slices/auth';

function App() {
  const dispatch = useDispatch();
  const User = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(isLoggedIn());
  }, []);
  return (
    <>
      HELLO
      {' '}
      {User && User.first_name}
    </>
  );
}

export default App;
