import { createSlice } from '@reduxjs/toolkit'

const sliceFilter = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    contactFilter: (_, { payload }) => payload,
  },
})

export const { contactFilter } = sliceFilter.actions
export default sliceFilter.reducer
