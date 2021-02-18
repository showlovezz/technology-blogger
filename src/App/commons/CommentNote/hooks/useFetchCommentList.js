import { useState, useCallback, useEffect } from 'react'

import initialValues from '../configs/initialValues'
import { fetchComment } from '../api'

const useFetchCommentList = (comments) => {
  const [commentList, setCommentList] = useState(initialValues)
  const [fetchStatus, setFetchStatus] = useState('Loading')

  const fetchData = useCallback(async () => {
    setFetchStatus('Loading')
    const data = await fetchComment().catch(() => {
      return Promise.resolve(initialValues)
    })
    const currentUserCommentList = data.filter((datum) => {
      return comments.indexOf(datum.id) > -1
    })
    setCommentList(currentUserCommentList)
    setFetchStatus('Success')
  }, [comments])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return [commentList, fetchStatus]
}

export default useFetchCommentList
