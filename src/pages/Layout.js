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


export const Layout = () => {

  const token = localStorage.getItem("token");

  return (
    <div className="wrapper">
      <Topbar />
      <Sidebar />
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
