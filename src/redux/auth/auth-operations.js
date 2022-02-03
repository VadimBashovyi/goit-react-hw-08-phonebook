import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  },
  unset() {
    axios.defaults.headers.common.Authorization = ''
  },
}

export const register = createAsyncThunk(
  'authUser/register',
  async (credentials) => {
    try {
      const { data } = await axios.post('/users/signup', credentials)
      token.set(data.token)
      toast.success(`👌 ${data.user.name} hello!`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      return data
    } catch (error) {
      toast.error(
        '🤯 Registration failed. Check the correctness of the entered data.',
        {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        },
      )
    }
  },
)
export const logIn = createAsyncThunk('authUser/logIn', async (credentials) => {
  try {
    const { data } = await axios.post('/users/login', credentials)
    token.set(data.token)
    toast.success(`👌 ${data.user.name} hello!`, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
    return data
  } catch (error) {
    toast.error('🤯 Such user does not exist, please register!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }
})
export const logOut = createAsyncThunk('authUser/logOut', async () => {
  try {
    await axios.post('/users/logout')
    token.unset()
  } catch (error) {
    return error.message
  }
})
export const fetchCurrentUser = createAsyncThunk(
  'authUser/fetchCurrentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState()
    const persistedToken = state.authUser.token

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue()
    }

    token.set(persistedToken)
    try {
      const { data } = await axios.get('/users/current')
      return data
    } catch (error) {
      console.log('error')
    }
  },
)
