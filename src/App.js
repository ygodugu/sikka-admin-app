import { Layout } from "./pages/Layout";
import { Login } from "./pages/Login";
import { Routes, Route } from "react-router-dom";

import AuthVerify from "./components/AuthVerify";

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth/login" element={<Login />} exact />

        <Route path="*" element={<Layout />} />
      </Routes>
      <AuthVerify />
    </>
  );
}

export default App;
