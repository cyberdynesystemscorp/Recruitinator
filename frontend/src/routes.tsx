import React from "react";
import { useTranslation } from 'react-i18next';
// Admin Imports
import MainDashboard from "views/admin/default";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdWork,
  MdHome,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";
import JobBoard from "views/admin/jobs";

const useRoutes = () => {
  const { t } = useTranslation();

  return [
    {
      name: t("menu.Jobs"),
      layout: "/admin",
      path: "jobs",
      icon: <MdWork className="h-6 w-6" />,
      component: <JobBoard />,
    },
    {
      name: "Main Dashboard",
      layout: "/admin",
      path: "default",
      icon: <MdHome className="h-6 w-6" />,
      component: <MainDashboard />,
    },
    {
      name: "Data Tables",
      layout: "/admin",
      icon: <MdBarChart className="h-6 w-6" />,
      path: "data-tables",
      component: <DataTables />,
    },
    {
      name: "Profile",
      layout: "/admin",
      path: "profile",
      icon: <MdPerson className="h-6 w-6" />,
      component: <Profile />,
    },
    {
      name: "Sign In",
      layout: "/auth",
      path: "sign-in",
      icon: <MdLock className="h-6 w-6" />,
      component: <SignIn />,
    },
    {
      name: "Auth0",
      layout: "/rtl",
      path: "auth0",
      icon: <MdLock className="h-6 w-6" />,
      component: <></>,
    }
  ];
}
export default useRoutes