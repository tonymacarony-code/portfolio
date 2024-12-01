
import { About } from '@/components/shared/About'
import { Footer } from '@/components/shared/Footer'
import Hero from '@/components/shared/Hero'
import PortfolioGridItem from '@/components/shared/PortfolioGridItem'
import { PortfolioItem } from '@/components/shared/PortfolioItem'


import { SectionTitle } from '@/components/shared/SectionTitle'
import { ServiceItem } from '@/components/shared/ServiceItem'

import { projects, services } from '@/components/utils/enums'
import React from 'react'

const Home = () => {
  return (
    <>

      <Hero />
      <main className="px-10">
        <About />
        <section id='projects' className="pt-104 grid grid-cols-1 gap-4">
          <SectionTitle name='selected Works' />
          <div className="mt-20 flex items-start gap-8">
            {projects.map((project, index) => (
              <PortfolioGridItem key={index} {...project} />
            ))}
          </div>
        </section>

        <section id='services' className='pt-40'>
          <SectionTitle name='services' />
          <div className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
