// src/components/layout/Sidebar.jsx
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard, People, BarChart, Assessment, Search, AdminPanelSettings } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const Sidebar = ({ drawerWidth }) => (
  <Drawer
    variant="permanent"
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
    }}
  >
    <List>
      <ListItem button component={RouterLink} to="/dashboard">
        <ListItemIcon><Dashboard /></ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component={RouterLink} to="/employees">
        <ListItemIcon><People /></ListItemIcon>
        <ListItemText primary="Employees" />
      </ListItem>
      <ListItem button component={RouterLink} to="/analytics">
        <ListItemIcon><BarChart /></ListItemIcon>
        <ListItemText primary="Analytics" />
      </ListItem>
      <ListItem button component={RouterLink} to="/stats">
        <ListItemIcon><Assessment /></ListItemIcon>
        <ListItemText primary="Stats" />
      </ListItem>
      <ListItem button component={RouterLink} to="/search">
        <ListItemIcon><Search /></ListItemIcon>
        <ListItemText primary="Search" />
      </ListItem>
      <ListItem button component={RouterLink} to="/admin">
        <ListItemIcon><AdminPanelSettings /></ListItemIcon>
        <ListItemText primary="Admin" />
      </ListItem>
    </List>
  </Drawer>
);

export default Sidebar;
