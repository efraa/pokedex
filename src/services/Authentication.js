import { post } from './api'

export class AuthService {
  static signup = async user =>
    await post('register', user)

  static auth = async user =>
    await post('auth', user)
  
  static forgotPassword = async email =>
    await post('account/forgot_password', email)
}
