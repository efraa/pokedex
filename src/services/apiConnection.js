const { 
  REACT_APP_API_URL : URL,
  REACT_APP_API_PORT : PORT,
  REACT_APP_API_PREFIX_ROUTES : PREFIX,
} = process.env

export const headers = {
  'Content-Type': 'application/json',
  Authorization: localStorage.token,
}

const apiUrl = `${URL}:${PORT}${PREFIX}`
export const apiRoute = path => `${apiUrl}/${path}`
