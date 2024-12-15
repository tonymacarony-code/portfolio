
import { About } from '@/components/shared/About'
import { Footer } from '@/components/shared/Footer'
import Hero from '@/components/shared/Hero'
import PortfolioGridItem from '@/components/shared/PortfolioItem'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { ServiceItem } from '@/components/shared/ServiceItem'
import { projects } from '@/components/utils/projects'
import { services } from '@/components/utils/services'


import React from 'react'

const Home = () => {
  return (
    <>

      <Hero />
      <main >
        <About />
        <section id='projects' className="px-6 md:px-10 pt-10 md:pt-104 grid grid-cols-1 gap-4">
          <SectionTitle name='selected Works' />
          <div className="mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-8 md:gap-y-20">
            {projects.map((project, index) => (
              <PortfolioGridItem key={index} {...project} />
            ))}
          </div>
        </section>

        <section id='services' className='px-6 md:px-10 pt-28 md:pt-40'>
          <SectionTitle name='services' />
          <div className="mt-10 md:mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceItem key={index} {...service} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home
