import { useState, useCallback, useEffect } from 'react'

import initialValues from '../configs/initialValues'
import { fetchTechnologyList } from '../api'

const useFetchTechnologyList = () => {
  const [technologyList, setTechnologyList] = useState(initialValues)
  const [fetchStatus, setFetchStatus] = useState('Loading')

  const fetchData = useCallback(async () => {
    setFetchStatus('Loading')
    const data = await fetchTechnologyList().catch(() => {
      return Promise.resolve(initialValues)
    })
    setTechnologyList(data)
    setFetchStatus('Success')
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return [technologyList, fetchStatus]
}

export default useFetchTechnologyList
