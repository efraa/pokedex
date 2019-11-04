import jwt from 'jsonwebtoken'
import { config } from '../../config'

export const verifyTokenAndGetUser = async (token) =>
  await jwt.verify(token, config.jwt.SECRET)

export const generateToken = async (user) => {
  const token = await jwt.sign(
    { user },
    config.jwt.SECRET,
    { expiresIn: config.jwt.EXPIRE }
  )
  if (token)
    localStorage.setItem('token', token)
    return token
}
