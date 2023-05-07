import { Suspense, lazy } from "react";
import { Navigate, Routes, useRoutes } from "react-router-dom";

// layouts
import { MainLayout } from "../layouts/main";

// config
import { DEFAULT_PATH } from "../config";
import LoadingScreen from "../components/LoadingScreen";
import { useMediaQuery } from "@mui/material";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  const isNonMobile= useMediaQuery("(min-width:600px)");
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: "dashboard", element: <DashBoard /> },
        { path: "products", element: <ProductPage isNonMobile={isNonMobile} /> },
        { path: "customers", element: <Customers isNonMobile={isNonMobile} /> },
        { path: "transactions", element: <Transactions isNonMobile={isNonMobile} /> },
        { path: "geography", element: <Geography isNonMobile={isNonMobile} /> },
         { path: "geography", element: <Geography isNonMobile={isNonMobile} /> },
         { path: "overview", element: <Overview /> },
        {path:'breakdown', element: <Breakdown isNonMobile={isNonMobile}></Breakdown>},
        {path:'daily', element: <DailyStat isNonMobile={isNonMobile}></DailyStat>},
        {path:'monthly', element: <MonthlyStat isNonMobile={isNonMobile}></MonthlyStat>},
        {path:'admin', element: <Admin isNonMobile={isNonMobile}></Admin>},

         
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },

    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

const DashBoard = Loadable(lazy(() => import("../pages/Dashboard")));
const GeneralApp = Loadable(lazy(() => import("../pages/ClientFacing/GeneralApp")));

const ProductPage = Loadable(lazy(() => import("../pages/ClientFacing/Products")));
const Customers = Loadable(lazy(() => import("../pages/ClientFacing/Customers")));
const Transactions = Loadable(lazy(() => import("../pages/ClientFacing/Transactions")));
const Geography = Loadable(lazy(() => import("../pages/ClientFacing/Geography")));

// SALES
const Overview = Loadable(lazy(() => import("../pages/Sales/Overview")));
const Breakdown= Loadable(lazy(()=> import ('../pages/Sales/Breakdown')))
const DailyStat= Loadable(lazy(()=> import ('../pages/Sales/DailyStat')))
const MonthlyStat= Loadable(lazy(()=> import ('../pages/Sales/MonthlyStat')))

//Client Facing
const Admin= Loadable(lazy(()=> import('../pages/Management/Admin')))

const Page404 = Loadable(lazy(() => import("../pages/Page404")));
