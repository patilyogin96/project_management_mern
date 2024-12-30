"use client";
import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar"
import StoreProvider, { RootState, useAppSelector } from "./redux";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapsed = useAppSelector(
    (state:RootState) => state.global.isSidebarCollapsed,
  );
  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      <Sidebar />
      <main
        className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg ${
          isSidebarCollapsed ? "" : "md:pl-64"
        }`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};

export default DashboardWrapper;
