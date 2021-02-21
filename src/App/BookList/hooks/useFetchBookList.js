import { useState, useCallback, useEffect } from 'react'

import initialValues from '../configs/initialValues'
import { fetchBookList } from '../api'

const useFetchBookList = () => {
  const [bookList, setBookList] = useState(initialValues)
  const [fetchStatus, setFetchStatus] = useState('Loading')

  const fetchData = useCallback(async () => {
    setFetchStatus('Loading')
    const data = await fetchBookList().catch(() => {
      return Promise.resolve(initialValues)
    })
    const currentBookList = data.filter((datum) => {
      return datum.fields.category === '優質書籍'
    })
    setBookList(currentBookList)
    setFetchStatus('Success')
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return [bookList, fetchStatus]
}

export default useFetchBookList
