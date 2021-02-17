import React from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import LoadingView from '../commons/LoadingView'
import CommentNote from '../commons/CommentNote'

import SingleTechnology from './components/SingleTechnology'
import useFetchTechnologyDetail from './hooks/useFetchTechnologyDetail'
import './styles.scss'

const TechnologyDetail = () => {
  const { id } = useParams()
  const [technology, setTechnology, fetchStatus] = useFetchTechnologyDetail(id)

  if (fetchStatus === 'Loading') {
    return <LoadingView />
  }

  return (
    <>
      <section className='blogger-detail'>
        <Container>
          <SingleTechnology technology={technology} setTechnology={setTechnology} />
        </Container>
      </section>
      <CommentNote />
    </>
  )
}

export default TechnologyDetail
