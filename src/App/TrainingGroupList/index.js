import React from 'react'
import { Container } from 'react-bootstrap'

import LoadingView from '../commons/LoadingView'

import TrainingGroupCard from './components/TrainingGroupCard'
import useFetchTrainingGroupList from './hooks/useFetchTrainingGroupList'
import './styles.scss'

const TrainingGroupList = () => {
  const [trainingGroupList, fetchStatus] = useFetchTrainingGroupList()

  if (fetchStatus === 'Loading') {
    return <LoadingView />
  }

  return (
    <section id='training-group-blogger'>
      <Container>
        <div className='blogger-list'>
          {
            trainingGroupList.map((datum, index) => {
              return (
                <TrainingGroupCard datum={datum} key={index} />
              )
            })
          }
        </div>
      </Container>
    </section>
  )
}

export default TrainingGroupList
