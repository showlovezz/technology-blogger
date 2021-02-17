import React from 'react'
import { Container } from 'react-bootstrap'

import TechnologyCard from './components/TechnologyCard'
import useFetchTechnologyList from './hooks/useFetchTechnologyList'
import './styles.scss'

const TechnologyList = () => {
  const [technologyList] = useFetchTechnologyList()

  return (
    <section className='main-blogger'>
      <Container>
        <div className='blogger-list'>
          {
            technologyList.map((datum, index) => {
              return (
                <TechnologyCard datum={datum} key={index} />
              )
            })
          }
        </div>
      </Container>
    </section>
  )
}

export default TechnologyList
