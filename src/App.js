import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { isLoggedIn } from './redux/slices/auth';
import './App.css';
import Layout from './Layouts/Layout';
import routes from './config/routes';
import Login from './pages/Login';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(isLoggedIn());
  }, []);
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            {routes.map((route, i) => (
              <>
                {route.path === '/' ? (<Route key={i} exact path={route.path} element={route.component} />) : ((user && route.protected && <Route key={i} path={route.path} element={route.component} />) || (!user && !route.protected && <Route key={i} path={route.path} element={route.component} />))}
              </>
            ))}

          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
