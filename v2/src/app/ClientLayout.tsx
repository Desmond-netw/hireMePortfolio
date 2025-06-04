'use client';

import React, { useState } from "react";
import AppsIcon from "@mui/icons-material/Apps";
import SideDrawer from "./components/drawer";
// import Link from "next/link";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  return (
    <div className="flex">
      {/* Fixed Sidebar */}
      <aside className="w-10 xs:w-6 h-screen fixed top-0 left-0 bg-slate-600 flex flex-col items-center py-15 z-50">
        <button onClick={() => toggleDrawer(true)}>
          <AppsIcon className="text-white" />
        </button>
      </aside>

      {/* Main Content */}
      <main className="ml-10 xs:ml-6 w-full min-h-screen bg-white">
        {children}
      </main>

      {/* Side Drawer */}
      <SideDrawer open={drawerOpen} toggleDrawer={toggleDrawer} />
    </div>
  );
}
