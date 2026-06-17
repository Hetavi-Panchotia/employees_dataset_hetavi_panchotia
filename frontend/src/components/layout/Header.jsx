// src/components/layout/Header.jsx
import { AppBar, Toolbar, IconButton, Typography, Avatar } from '@mui/material';
import { Logout } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth?.user);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  return (
    <AppBar position="static" color="primary" sx={{ boxShadow: 'none' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Employee Management Dashboard
        </Typography>
        {user && (
          <>
            <Avatar sx={{ bgcolor: 'secondary.main', mr: 2 }}>{user.name?.[0] || 'U'}</Avatar>
            <IconButton color="inherit" onClick={handleLogout} title="Logout">
              <Logout />
            </IconButton>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
