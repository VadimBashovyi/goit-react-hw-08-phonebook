import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
axios.defaults.baseURL = 'https://61ec45d8f3011500174d2128.mockapi.io'

export const getAllContacts = createAsyncThunk(
  'contacts/getAllContacts',
  async () => {
    const { data } = await axios.get('/contacts')
    return data
  },
)
export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async ({ name, number }) => {
    const contactAdd = { name, number }
    const { data } = await axios.post('/contacts', contactAdd)
    return data
  },
)

export const deletedContact = createAsyncThunk(
  'contacts/deletedContact',
  async (contactId) => {
    const { data } = await axios.delete(`/contacts/${contactId}`)
    return data
  },
)
