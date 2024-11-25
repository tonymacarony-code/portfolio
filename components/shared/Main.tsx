
import React from 'react'

import { projects } from '../utils/enums'
import { ProjectRow } from './ProjectRow'
import { About } from './About'
import { SectionTitle } from './SectionTitle'
import { TechStack } from './TechStack'
const Main = () => {
    return (
        <main>
            <About />

            <section className="mt-20 grid grid-cols-1 gap-4">
                <SectionTitle name='selected Works' />
                {projects.map((project, index) => (
                    <ProjectRow key={index} {...project} />
                ))}
            </section>
            <TechStack />
        </main>
    )
}

export default Main
