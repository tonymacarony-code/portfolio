import React from 'react'
interface Props {
    name: string
}
export const SectionTitle: React.FC<Props> = ({ name }) => {
    return (
        <div>
            <span className='mr-2 text-lg uppercase'>{name} <span>/</span></span>

        </div>
    )
}

