import React from 'react'
import { Container } from 'react-bootstrap'

import LoadingView from '../commons/LoadingView'

import BookCard from './components/BookCard'
import useFetchBookList from './hooks/useFetchBookList'
import './styles.scss'

const BookList = () => {
  const [bookList, fetchStatus] = useFetchBookList()

  if (fetchStatus === 'Loading') {
    return <LoadingView />
  }

  return (
    <section id='book-blogger'>
      <Container>
        <div className='blogger-list'>
          {
            bookList.map((datum, index) => {
              return (
                <BookCard datum={datum} key={index} />
              )
            })
          }
        </div>
      </Container>
    </section>
  )
}

export default BookList
