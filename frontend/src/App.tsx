import { Routes, Route } from "react-router-dom";
import { AuthenticationGuard } from "./components/authentication-guard";

import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";

const App = () => {
  return (
    <Routes>
      
      <Route path="/*" element={<AuthenticationGuard component={AdminLayout} />} />
      <Route path="/signup/*" element={<AuthLayout />} />
    </Routes>
  );
};

export default App;