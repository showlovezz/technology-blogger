import { useState, useCallback, useEffect } from 'react'

import initialValues from '../configs/initialValues'
import { fetchTrainingGroupList } from '../api'

const useFetchTrainingGroupList = () => {
  const [trainingGroupList, setTrainingGroupList] = useState(initialValues)
  const [fetchStatus, setFetchStatus] = useState('Loading')

  const fetchData = useCallback(async () => {
    setFetchStatus('Loading')
    const data = await fetchTrainingGroupList().catch(() => {
      return Promise.resolve(initialValues)
    })
    const currentTrainingGroupList = data.filter((datum) => {
      return datum.fields.category === '教育機構'
    })
    setTrainingGroupList(currentTrainingGroupList)
    setFetchStatus('Success')
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return [trainingGroupList, fetchStatus]
}

export default useFetchTrainingGroupList
