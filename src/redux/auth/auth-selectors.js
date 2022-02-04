export const getUserEmail = (state) => state.authUser.user.name
export const getUserToken = (state) => state.authUser.token
export const getUserIsLoggedIn = (state) => state.authUser.isLoggedIn
export const getFetchingCurrentUser = (state) =>
  state.authUser.fetchingCurrentUser
