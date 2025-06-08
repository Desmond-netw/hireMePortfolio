'use client';

import React, { useState } from "react";
import AppsIcon from "@mui/icons-material/Apps";
import SideDrawer from "./components/drawer";
// import Container from "./components/container";
import Link from "next/link";

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
    <div className="max-w-full" >
      
      {/* -------------------- Fixed smaill-side-bar-menu */}
      <aside className="w-10 xs:w-6 h-screen fixed top-0 left-0 bg-slate-600 flex flex-col items-center py-15 z-50">
        <Link href="/" className="p-2 w-full">D.<span className="text-orange-500">D</span></Link>
        <button onClick={() => toggleDrawer(true)} className="md:hidden flex">
          <AppsIcon className="text-white" />
        </button>
      </aside>
     
      {/* Main Content */}
      <main className="">
        
        {children}
          
      </main>

      {/* ---------- Side Drawer */}
      <SideDrawer open={drawerOpen} toggleDrawer={toggleDrawer} />
     
    </div>
  );
}
