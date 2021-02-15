import React from 'react'
import { Container } from 'react-bootstrap'

import TechnologyCard from './components/TechnologyCard'
import fakeTechnologyList from './data/fakeTechnologyList'
import './styles.scss'

const TechnologyList = () => {
  return (
    <section className='main-blogger'>
      <Container>
        <div className='blogger-list'>
          {
            fakeTechnologyList.map((datum, index) => {
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
