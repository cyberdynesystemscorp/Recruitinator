import { Routes, Route, Navigate } from "react-router-dom";
import { AuthenticationGuard } from "./components/authentication-guard";

import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
const App = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="/" element={<Navigate to="/admin" replace />} />
      <Route path="login" element={<AuthenticationGuard component={AdminLayout}  />} />
    </Routes>
  );
};

export default App;
