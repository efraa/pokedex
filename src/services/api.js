import instance from 'axios'
import { apiRoute, headers } from './apiConnection'

const api = instance.create({
  baseURL: apiRoute,
  headers
});

export const post = async (endpoint, data) =>
  await api.post(endpoint, data)

export const put = async (endpoint, data) =>
  await api.put(endpoint, data)

export const get = async endpoint =>
  await api.get(endpoint)
