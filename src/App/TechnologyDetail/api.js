import Axios from 'axios'

import { apiKey } from '../../../apiKey'

const headers = { Authorization: `Bearer ${apiKey}` }

export const fetchTechnology = (id) => {
  if (!id) return null
  const url = `https://api.airtable.com/v0/app142LlsAaBEYVw4/technologies/${id}`

  return Axios.get(url, { headers })
    .then((response) => {
      const { data } = response
      if (data && data.errors !== undefined) {
        return Promise.reject(data.errors)
      }
      return data
    })
    .catch((error) => {
      if (!error.response || !error.response.data) {
        return Promise.reject(error)
      }
      const { errors, message } = error.response.data
      if (message) {
        return Promise.reject(message)
      }
      if (errors) {
        return Promise.reject(errors)
      }
      return Promise.reject(error)
    })
}
