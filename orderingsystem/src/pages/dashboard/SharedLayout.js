import { DashHead, NavBar } from "../../component";
import { Outlet  } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div>
        {/* header */}
      <DashHead />

      {/* slide list */}
      <NavBar />

    <main id="main" >
    <Outlet /> 
    </main>
    </div>
  );
};

export default SharedLayout;
