import Axios from 'axios'

import { apiKey } from '../../../apiKey'

const headers = { Authorization: `Bearer ${apiKey}` }

export const fetchTechnologyList = () => {
  const url = 'https://api.airtable.com/v0/app142LlsAaBEYVw4/technologies?maxRecords=6&view=Grid%20view'

  return Axios.get(url, { headers })
    .then((response) => {
      const { data } = response
      if (data && data.errors !== undefined) {
        return Promise.reject(data.errors)
      }
      const { records } = data
      if (!records) {
        return Promise.reject(Error('api.error.noTechnologyList'))
      }
      return records
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
