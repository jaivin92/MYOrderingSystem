import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Register, Error } from "./pages";
import { Profile, Home } from "./pages/dashboard";
import Dashboard from "./pages/dashboard/Dashboard";
import SharedLayout from "./pages/dashboard/SharedLayout";

import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboards" element={<SharedLayout />} />

        {/* dynamic
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Error />} />
          <Route path="profile" element={<Profile />} />
          <Route path="home" element={<Home />} />
        </Route> */}

        {/* normal */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
