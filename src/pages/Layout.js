import React,{ useState } from 'react';
import { Topbar } from "../components/Topbar";
import { Sidebar } from "../components/Sidebar";
import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

const Dashboard = lazy(() =>
  import("./Dashboard").then((module) => ({ default: module.Dashboard }))
);

const Users = lazy(() =>
  import("./Users/Users").then((module) => ({ default: module.Users }))
);

const Vouchers = lazy(() =>
  import("./Vouchers/Vouchers").then((module) => ({ default: module.Vouchers }))
);

const Merchants = lazy(() =>
  import("./Merchants/Merchants").then((module) => ({ default: module.Merchants }))
);

const Purchases = lazy(() =>
  import("./Purchases/Purchases").then((module) => ({ default: module.Purchases }))
);

const Transactions = lazy(() =>
  import("./Transactions/Transactions").then((module) => ({ default: module.Transactions }))
);

const BusinessCategories = lazy(() =>
  import("./BusinessCategories/BusinessCategories").then((module) => ({ default: module.BusinessCategories }))
);

const Categories = lazy(() =>
  import("./Categories/Categories").then((module) => ({ default: module.Categories }))
);

const Industries = lazy(() =>
  import("./Industries/Industries").then((module) => ({ default: module.Industries }))
);

const Countries = lazy(() =>
  import("./Countries/Countries").then((module) => ({ default: module.Countries }))
);

const States = lazy(() =>
  import("./States/States").then((module) => ({ default: module.States }))
);

const Cities = lazy(() =>
  import("./Cities/Cities").then((module) => ({ default: module.Cities }))
);

const Documents = lazy(() =>
  import("./Documents/Documents").then((module) => ({ default: module.Documents }))
);

const Events = lazy(() =>
  import("./Events/Events").then((module) => ({ default: module.Events }))
);


export const Layout = () => {

  const token = localStorage.getItem("token");

  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="wrapper">
      <Topbar toggleSidebar={toggleSidebar}/>
      <Sidebar isCollapsed={isSidebarCollapsed} closeSidebar={toggleSidebar} />
      <main role="main" className="main-content">
        <div className="container-fluid">
          <Suspense>
            <Routes>
               {!token ? (
                <Route
                  path="*"
                  element={<Navigate to="/auth/login" replace />}
                />
                ) : (
                <>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/Vouchers" element={<Vouchers />} />
                  <Route path="/Merchants" element={<Merchants />} />
                  <Route path="/Purchases" element={<Purchases />} />
                  <Route path="/Transactions" element={<Transactions />} />
                  <Route path="/BusinessCategories" element={<BusinessCategories />} />
                  <Route path="/Categories" element={<Categories />} />
                  <Route path="/Industries" element={<Industries />} />
                  <Route path="/Countries" element={<Countries />} />
                  <Route path="/States" element={<States />} />
                  <Route path="/Cities" element={<Cities />} />
                  <Route path="/Documents" element={<Documents />} />
                  <Route path="/Events" element={<Events />} />
                 
                  <Route
                    path="*"
                    element={<Navigate to="/dashboard" replace />}
                  />
                </>
               )}
            </Routes>
          </Suspense>
        </div>
      </main>
    </div>
  );
};
