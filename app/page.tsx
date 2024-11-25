
import { Footer } from '@/components/shared/Footer'
import Hero from '@/components/shared/Hero'
import Main from '@/components/shared/Main'
import React from 'react'

const Home = () => {
  return (
    <>

      <Hero />
      <div className="px-10">
        <Main />
        <Footer />
      </div>
    </>
  )
}

export default Home
