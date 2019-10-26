import api from 'axios'

import { apiRoute, headers } from './apiConnection'

export const post = async (endpoint, data) =>
  await api.post(apiRoute(endpoint), ...data, ...headers)

export const get = async (endpoint) =>
  await api.get(apiRoute(endpoint), ...headers)