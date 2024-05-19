import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import Loader from "../components/loader/Loader.js";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages *****/
const Dashboard = lazy(() => import("../views/Dashboard"));
const Login = lazy(() => import("../views/Login"));
const Signup = lazy(() => import("../views/Signup"));
const CharityLogin = lazy(() => import("../views/CharityLogin"));
const CharityDashboard = lazy(() => import("../views/CharityDashboard"));

/*****Routes******/
const ThemeRoutes = [
  {
    path: "/login",
    element: (
      <Suspense fallback={<Loader />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/signup",
    element: (
      <Suspense fallback={<Loader />}>
        <Signup />
      </Suspense>
    ),
  },
  {
    path: "/charitylogin",
    element: (
      <Suspense fallback={<Loader />}>
        <CharityLogin />
      </Suspense>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <Suspense fallback={<Loader />}>
        <FullLayout />
      </Suspense>
    ),
    children: [
      { path: "", element: (
        <Suspense fallback={<Loader />}>
          <Dashboard />
        </Suspense>
        ),
      },
    ],
  },
  {
    path: "/charity-dashboard",
    element: (
      <Suspense fallback={<Loader />}>
        <FullLayout />
      </Suspense>
    ),
    children: [
      { path: "", element: (
        <Suspense fallback={<Loader />}>
          <CharityDashboard />
        </Suspense>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
];

export default ThemeRoutes;
