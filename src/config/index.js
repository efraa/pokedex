export const config = {
  jwt: {
    EXPIRE: process.env.REACT_APP_TOKEN_EXPIRE,
    SECRET: process.env.REACT_APP_SECRET,
  }
}