// src/app/components/SideDrawer.tsx
'use client';

import React from 'react';
import Drawer from '@mui/material/Drawer';
import DrawerList from './DrawerList'; // Adjust path if necessary

interface SideDrawerProps {
  open: boolean;
  toggleDrawer: (open: boolean) => void;
}

const SideDrawer: React.FC<SideDrawerProps> = ({ open, toggleDrawer }) => {
  return (
    <Drawer open={open} onClose={() => toggleDrawer(false)}>
      <DrawerList toggleDrawer={toggleDrawer} />
    </Drawer>
  );
};

export default SideDrawer;
