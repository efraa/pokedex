import { post } from './api'

export class AuthService {
  static signup = async user =>
    await post('register', user)

  static auth = async user =>
    await post('auth', user)
}
