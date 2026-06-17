// src/features/employees/employeeSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchEmployees as fetchEmployeesAPI } from '../../api/endpoints';

export const fetchEmployees = createAsyncThunk('employees/fetchAll', async (params = {}, { rejectWithValue }) => {
  try {
    const response = await fetchEmployeesAPI(params);
    return response.data; // assume array of employees
  } catch (err) {
    return rejectWithValue(err.response?.data || err.message);
  }
});

const employeeSlice = createSlice({
  name: 'employees',
  initialState: { list: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default employeeSlice.reducer;
