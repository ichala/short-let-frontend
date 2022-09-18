import { useSelector } from 'react-redux';

function Home() {
  const User = useSelector((state) => state.user);
  return (
    <div>
      <h1>Hello</h1>
      {User && User.first_name}
    </div>
  );
}

export default Home;
