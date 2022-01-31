import { createSlice } from '@reduxjs/toolkit'
import { getAllContacts, addContacts, deletedContact } from '../../utilits/Api'

const sliceItems = createSlice({
  name: 'items',
  initialState: [],
  extraReducers: {
    [getAllContacts.fulfilled]: (_, { payload }) => payload,
    [addContacts.fulfilled]: (state, { payload }) => [...state, payload],
    [deletedContact.fulfilled]: (state, { payload }) =>
      state.filter((contact) => contact.id !== payload.id),
  },
})

export default sliceItems.reducer
