const { 
  REACT_APP_API_URL : URL,
  REACT_APP_API_PORT : PORT,
  REACT_APP_API_PREFIX_ROUTES : PREFIX,
} = process.env

export const headers = {
  'Content-Type': 'application/json',
  Authorization: localStorage.token,
}

export const apiRoute = `${URL}:${PORT}${PREFIX}`
