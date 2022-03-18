import React from 'react'
import Navbar from '../components/Navbar'
import Board from '../components/Board'
import List from '../components/List'
import Footer from '../components/Footer'

const Work = () => {
  return (
    <>
        <div className='container'>
            <Navbar />
            <Board />
            <List />
        </div>
        <Footer />
    </>
  )
}

export default Work