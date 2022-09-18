import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import { isLoggedIn } from './redux/slices/auth';
import './App.css';
import Layout from './Layouts/Layout';
import routesConfig from './config/routes';

function App() {
  const dispatch = useDispatch();
  const routes = useRoutes(routesConfig);
  useEffect(() => {
    dispatch(isLoggedIn());
  }, []);
  return (
    <>

      <Layout>
        {routes}
      </Layout>

    </>
  );
}

export default App;
