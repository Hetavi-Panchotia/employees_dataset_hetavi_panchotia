// src/components/layout/MainLayout.jsx
import { Box } from '@mui/material';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const drawerWidth = 240;

const MainLayout = () => (
  <Box sx={{ display: 'flex' }}>
    <Header />
    <Sidebar drawerWidth={drawerWidth} />
    <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: `${drawerWidth}px` }}>
      <Outlet />
    </Box>
  </Box>
);

export default MainLayout;
