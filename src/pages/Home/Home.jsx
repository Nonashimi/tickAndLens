import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/Footer'
import HomeRouter from '../../AppRouter/HomeRouter'

const Home = () => {
  return (
    <div className="">
        <Header/>
        <div className="container min-h-[60vh] box-border mx-auto my-[70px]">
            <HomeRouter/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home