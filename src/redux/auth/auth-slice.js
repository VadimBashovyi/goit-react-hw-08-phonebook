import { createSlice } from '@reduxjs/toolkit'
import { logIn, register, logOut, fetchCurrentUser } from './auth-operations'

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  fetchingCurrentUser: false,
}

const authUser = createSlice({
  name: 'authUser',
  initialState,
  extraReducers: {
    [register.fulfilled](state, { payload: { user, token } }) {
      state.user = user
      state.token = token
      state.isLoggedIn = true
    },

    [logIn.fulfilled](state, { payload: { user, token } }) {
      state.user = user
      state.token = token
      state.isLoggedIn = true
    },

    [logOut.fulfilled](state) {
      state.user = { name: null, email: null }
      state.token = null
      state.isLoggedIn = false
    },

    [fetchCurrentUser.pending](state) {
      state.fetchingCurrentUser = true
    },
    [fetchCurrentUser.fulfilled](state, { payload }) {
      state.user = payload
      state.isLoggedIn = true
      state.fetchingCurrentUser = false
    },
    [fetchCurrentUser.rejected](state) {
      state.fetchingCurrentUser = false
    },
  },
})

export default authUser.reducer
