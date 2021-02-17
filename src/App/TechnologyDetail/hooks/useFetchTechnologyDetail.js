import { useState, useCallback, useEffect } from 'react'

import { fetchTechnology } from '../api'
import initialValues from '../configs/initialValues'

const useFetchTechnologyDetail = (id) => {
  const [technology, setTechnology] = useState(initialValues)
  const [fetchStatus, setFetchStatus] = useState('Loading')

  const fetchData = useCallback(async () => {
    setFetchStatus('Loading')
    const data = await fetchTechnology(id).catch(() => {
      return Promise.resolve(initialValues)
    })
    setTechnology(data)

    setFetchStatus('Success')
  }, [id])

  useEffect(() => {
    if (id) {
      fetchData()
    }
  }, [id, fetchData])

  return [technology, setTechnology, fetchStatus]
}

export default useFetchTechnologyDetail
