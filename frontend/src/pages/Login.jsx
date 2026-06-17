// src/pages/Login.jsx
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { loginUser } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { TextField } from 'formik-mui';
import { Button, Box, Paper, Typography } from '@mui/material';
import { toast } from 'react-hot-toast';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const initialValues = { email: '', password: '' };
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Too Short!').required('Required'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await dispatch(loginUser(values)).unwrap();
      toast.success('Logged in successfully');
      navigate('/dashboard');
    } catch (e) {
      toast.error(e || 'Login failed');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="background.default">
      <Paper elevation={3} sx={{ p: 4, width: 360 }}>
        <Typography variant="h5" mb={2} align="center">
          Login
        </Typography>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <Box mb={2}>
                <Field component={TextField} name="email" type="email" label="Email" fullWidth />
              </Box>
              <Box mb={2}>
                <Field component={TextField} name="password" type="password" label="Password" fullWidth />
              </Box>
              <Button type="submit" variant="contained" color="primary" fullWidth disabled={isSubmitting || loading}>
                {loading ? 'Logging in...' : 'Login'}
              </Button>
            </Form>
          )}
        </Formik>
        {error && <Typography color="error" mt={2}>{error}</Typography>}
      </Paper>
    </Box>
  );
};

export default Login;
