import React, { useState } from 'react';
import { Topbar } from "../components/Topbar";
import { Sidebar } from "../components/Sidebar";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

const ViewMerchants = lazy(() =>
  import("./Merchants/ViewMerchants").then((module) => ({ default: module.ViewMerchants }))
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

const Services = lazy(() =>
  import("./Services/Services").then((module) => ({ default: module.Services }))
);

const MerchantServices = lazy(() =>
  import("./Merchants/MerchantServices/MerchantServices").then((module) => ({ default: module.MerchantServices }))
);

const MerchantServiceAppointmentBlocking = lazy(() =>
  import("./Merchants/MerchantServices/MerchantServiceAppointmentBlocking/MerchantServiceAppointmentBlocking").then((module) => ({ default: module.MerchantServiceAppointmentBlocking }))
);

const MerchantServiceAppointment = lazy(() =>
  import("./Merchants/MerchantServices/MerchantServiceAppointment/MerchantServicesAppointment").then((module) => ({ default: module.MerchantServiceAppointment }))
);

const ViewTransaction = lazy(() =>
  import("./Transactions/ViewTransaction").then((module) => ({ default: module.ViewTransaction }))
);

// for graph view page

const ViewUsersLineChart = lazy(() =>
  import("./Chart/ViewUsersLineChart").then((module) => ({ default: module.ViewUsersLineChart }))
);

const ViewVouchersLineChart = lazy(() =>
  import("./Chart/ViewVouchersLineChart").then((module) => ({ default: module.ViewVouchersLineChart }))
);

const ViewMerchantsLineChart = lazy(() =>
  import("./Chart/ViewMerchantsLineChart").then((module) => ({ default: module.ViewMerchantsLineChart }))
);

const ViewPurchasesLineChart = lazy(() =>
  import("./Chart/ViewPurchasesLineChart").then((module) => ({ default: module.ViewPurchasesLineChart }))
);

const ViewTransactionsLineChart = lazy(() =>
  import("./Chart/ViewTransactionsLineChart").then((module) => ({ default: module.ViewTransactionsLineChart }))
);

const ViewBusinessCategoriesLineChart = lazy(() =>
  import("./Chart/ViewBusinessCategoriesLineChart").then((module) => ({ default: module.ViewBusinessCategoriesLineChart }))
);

const ViewCategoriesLineChart = lazy(() =>
  import("./Chart/ViewCategoriesLineChart").then((module) => ({ default: module.ViewCategoriesLineChart }))
);

const ViewIndustriesLineChart = lazy(() =>
  import("./Chart/ViewIndustriesLineChart").then((module) => ({ default: module.ViewIndustriesLineChart }))
);

const ViewCountriesLineChart = lazy(() =>
  import("./Chart/ViewCountriesLineChart").then((module) => ({ default: module.ViewCountriesLineChart }))
);

const ViewStatesLineChart = lazy(() =>
  import("./Chart/ViewStatesLineChart").then((module) => ({ default: module.ViewStatesLineChart }))
);

const ViewCitiesLineChart = lazy(() =>
  import("./Chart/ViewCitiesLineChart").then((module) => ({ default: module.ViewCitiesLineChart }))
);

const ViewDocumentsLineChart = lazy(() =>
  import("./Chart/ViewDocumentsLineChart").then((module) => ({ default: module.ViewDocumentsLineChart }))
);

const ViewEventsLineChart = lazy(() =>
  import("./Chart/ViewEventsLineChart").then((module) => ({ default: module.ViewEventsLineChart }))
);


export const Layout = () => {

  const token = localStorage.getItem("token");

  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="wrapper">
      <Topbar toggleSidebar={toggleSidebar} />
      <ToastContainer />
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
                  <Route path="/viewMerchants/:userId" element={<ViewMerchants />} />
                  <Route path="/MerchantServices/:userId" element={<MerchantServices />} />
                  <Route path="/MerchantServiceAppointmentBlocking/:id/:userId" element={<MerchantServiceAppointmentBlocking />} />
                  <Route path="/MerchantServiceAppointment/:id" element={<MerchantServiceAppointment />} />
                  <Route path="/Purchases" element={<Purchases />} />
                  <Route path="/Transactions" element={<Transactions />} />
                  <Route path="/view-transaction/:id" element={<ViewTransaction />} />
                  <Route path="/BusinessCategories" element={<BusinessCategories />} />
                  <Route path="/Categories" element={<Categories />} />
                  <Route path="/Industries" element={<Industries />} />
                  <Route path="/Countries" element={<Countries />} />
                  <Route path="/States" element={<States />} />
                  <Route path="/Cities" element={<Cities />} />
                  <Route path="/Documents" element={<Documents />} />
                  <Route path="/Events" element={<Events />} />
                  <Route path="/Services" element={<Services />} />
                  <Route path="/ViewUsersLineChart" element={<ViewUsersLineChart />} />
                  <Route path="/ViewVouchersLineChart" element={<ViewVouchersLineChart />} />
                  <Route path="/ViewMerchantsLineChart" element={<ViewMerchantsLineChart />} />
                  <Route path="/ViewPurchasesLineChart" element={<ViewPurchasesLineChart />} />
                  <Route path="/ViewTransactionsLineChart" element={<ViewTransactionsLineChart />} />
                  <Route path="/ViewBusinessCategoriesLineChart" element={<ViewBusinessCategoriesLineChart />} />
                  <Route path="/ViewCategoriesLineChart" element={<ViewCategoriesLineChart />} />
                  <Route path="/ViewIndustriesLineChart" element={<ViewIndustriesLineChart />} />
                  <Route path="/ViewCountriesLineChart" element={<ViewCountriesLineChart />} />
                  <Route path="/ViewStatesLineChart" element={<ViewStatesLineChart />} />
                  <Route path="/ViewCitiesLineChart" element={<ViewCitiesLineChart />} />
                  <Route path="/ViewDocumentsLineChart" element={<ViewDocumentsLineChart />} />
                  <Route path="/ViewEventsLineChart" element={<ViewEventsLineChart />} />
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
