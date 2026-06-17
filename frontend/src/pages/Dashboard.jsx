// src/pages/Dashboard.jsx
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';

const Dashboard = () => (
  <Box sx={{ p: 3 }}>
    <Typography variant="h4" gutterBottom>
      Dashboard Overview
    </Typography>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography variant="h6">Total Employees</Typography>
            <Typography variant="h4" color="primary">--</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography variant="h6">Avg Experience</Typography>
            <Typography variant="h4" color="primary">--</Typography>
          </CardContent>
        </Card>
      </Grid>
      {/* Add more KPI cards as needed */}
    </Grid>
  </Box>
);

export default Dashboard;
