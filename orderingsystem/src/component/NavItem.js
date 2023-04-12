import { NavLink } from 'react-router-dom';
import manuitem from '../utils/slideMenu'
const NavItem = ({toggleSidebar}) => {
    return (
        <div>
            { manuitem.map((menu) => {
              
              const { text, path, id, icon} = menu;
              return (
                <NavLink
                    to={path}
                    key={id}
                    onClick={toggleSidebar}
                    className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                end
                >
                 <i className={icon}></i>
                {text}

                </NavLink>
              )     

            }   
                
                
            )}            
        </div>
    );
};

export default NavItem;