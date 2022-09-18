import { useSelector } from 'react-redux';

function Home() {
  const user = useSelector((state) => state.user);
  return (
    <div>
      <h1>Hello</h1>
      {user && user.first_name}
    </div>
  );
}

export default Home;
