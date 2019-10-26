const uri = path => `${process.env.REACT_APP_API_URI}/${path}`

const headers = {
  'Content-Type': 'application/json',
  Authorization: localStorage.token,
}

const roles = {
  user: 'user',
  owner: 'owner',
}

const validations = {
  messages: {
    required: 'Este campo es requerido.',
    email: 'Su dirección de correo electrónico debe ser válida.',
    alpha_num_dash:
      'El nombre de usuario solo puede contener letras, números y guiones.',
    min: 'La contraseña debe tener al menos 6 caracteres.',
    alpha_space: 'Este campo solo puede contener letras y espacios.',
    alpha_num: 'Este campo solo puede contener letras y números.',
  },
  locale: 'en',
}

export { uri, headers, roles, validations }
