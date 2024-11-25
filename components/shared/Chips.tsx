import React from 'react'
import { cn } from '../utils/utils'


interface Props {
    id: number,
    name: string,
    selected: number,
    onCategoryClick: (id: number) => void

}
export const Chips: React.FC<Props> = ({ name, id, selected, onCategoryClick }) => {
    return (
        <>
            <div onClick={() => onCategoryClick(id)} className={cn('text-dark bg-light border border-[#e2e2e2] rounded-14 px-4 py-1.5 text-sm font-medium cursor-pointer hover:bg-gray-300', selected === id && 'bg-gray-500 border-gray-500 text-white hover:bg-gray-500')}>{name}</div>
        </>
    )
}

