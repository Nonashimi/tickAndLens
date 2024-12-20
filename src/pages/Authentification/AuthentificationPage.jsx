import React from 'react'
import Header from '../../components/header'
import AuthentificationRouter from '../../AppRouter/AuthentificationRouter'

const AuthentificationPage = () => {
  return (
    <div>
        <Header/>
        <div className="w-full mt-[70px]">
            <AuthentificationRouter/>
        </div>
    </div>
  )
}

export default AuthentificationPage