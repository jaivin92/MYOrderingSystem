import { useAppContext } from "../context/appContext";
import NavItem from "./NavItem";


const NavBar = () => {
    const { showSidebar } = useAppContext();
  return (
    <div  className={showSidebar ? "" : "toggle-sidebar"}>
      {/* <!-- ======= Sidebar ======= --> */}
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
            <NavItem/>
        </ul>
      </aside>
      {/* <!-- End Sidebar--> */}
    </div>
  );
};

export default NavBar;
