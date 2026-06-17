// src/App.jsx
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-hot-toast';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import store from './app/store';
import AppRouter from './app/router';
import theme from './theme/theme';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRouter />
        <ToastContainer position="top-right" />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
