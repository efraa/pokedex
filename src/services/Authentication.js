import { post, get, put } from './api'

export const AuthService = {
  signup: async user =>
    await post('register', user),

  auth: async user =>
    await post('auth', user),
  
  forgotPassword: async email =>
    await post('account/forgot_password', email),

  forgotPassIsExpire: async token =>
    await get(`account/forgot_password_expire/${token}`),

  resetPassword: async (password, token) =>
    await put(`account/reset_password/${token}`, password),

  updateUser: async (username, updated) =>
    await put(`user/${username}`, updated),
}
