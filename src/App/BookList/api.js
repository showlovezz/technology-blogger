import Axios from 'axios'

const headers = { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` }

export const fetchBookList = () => {
  const url = 'https://api.airtable.com/v0/app142LlsAaBEYVw4/technologies?view=Grid%20view'

  return Axios.get(url, { headers })
    .then((response) => {
      const { data } = response
      if (data && data.errors !== undefined) {
        return Promise.reject(data.errors)
      }
      const { records } = data
      if (!records) {
        return Promise.reject(Error('api.error.noBookList'))
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
