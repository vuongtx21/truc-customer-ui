import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "@/features/dashboard";
import MainLayout from "@/components/layouts/main-layout";

interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Dashboard />} />
    </Route>
  </Routes>
);

export default App;
