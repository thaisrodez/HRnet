import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type Employee } from '../data/mockData'
import { type RootState } from '../utils/store'

const initialState: Employee[] = []

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee(state, action: PayloadAction<Employee>) {
      state.push(action.payload)
    },
  },
})

export const { addEmployee } = employeesSlice.actions

export const selectEmployees = (state: RootState) => state.employees
