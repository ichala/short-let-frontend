import Sidebar from '../components/SideBar';
import Styles from './layout.module.css';

function Layout({ children }) {
  return (
    <>
      <div className={Styles.main_container}>
        <Sidebar />
        <main className={` ${Styles.main_content} container-fluid`}>{children}</main>
      </div>
    </>
  );
}

export default Layout;
