import { post } from './api'

export class AuthService {
  static register = async user =>
    await post('register', user)
}
