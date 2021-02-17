import { useState, useCallback, useEffect } from 'react'

import initialValues from '../configs/initialValues'
import { fetchUserList } from '../api'

const useFetchUserList = () => {
  const [userList, setUserList] = useState(initialValues)
  const [fetchStatus, setFetchStatus] = useState('Loading')

  const fetchData = useCallback(async () => {
    setFetchStatus('Loading')
    const data = await fetchUserList().catch(() => {
      return Promise.resolve(initialValues)
    })
    setUserList(data)
    setFetchStatus('Success')
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return [userList, fetchStatus]
}

export default useFetchUserList
