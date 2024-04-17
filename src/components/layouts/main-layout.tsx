import Category from "@/components/common/category";
import Header from "@/components/common/header";
import React from "react";
import { Outlet } from "react-router-dom";

interface MainLayoutProps {}

const MainLayout: React.FunctionComponent<MainLayoutProps> = () => {
  return (
    <div className="w-full">
      <Header />
      <Category />
      <Outlet />
    </div>
  );
};

export default MainLayout;
