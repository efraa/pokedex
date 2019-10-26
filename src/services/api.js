const uri = process.env.API_URI || 'http://localhost:4000/api/v1'

const headers = {
  'Content-Type': 'application/json',
  Authorization: localStorage.token,
}

export const POST = ({ endpoint, data }) => {
  const url = `${uri}/${endpoint}`
  fetch(url, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(data),
    headers,
  })
    .then(res => res.json())
    .then(response => console.log(response))
}
