import Sidebar from '../components/SideBar';

function Layout({ children }) {
  return (
    <div>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
