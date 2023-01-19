import React from 'react'
import { useState } from 'react'
import { useGetCards } from '../hooks/api';
import Cards from './Cards'
export default function Set({ set }) {
    const [open, setOpen] = useState(false);
    return (
        <div
            onClick={() => setOpen(prev => !prev)}
            className='px-3 border border-dark mb-3 card-set'>
            <div className='p-2 border-bottom d-flex justify-content-between '>
                <strong> {`${set.set_code} / ${set.set_name}`}</strong>
                <div> {`${set.num_of_cards} cards`}</div>
            </div>
            <div className={`cardWrapper ${open ? 'card-active' : ''}`}>
                {
                    open && (
                        <SetCards setName={set.set_name} />
                    )
                }
            </div>
        </div>
    )
}

function SetCards({ setName }) {
    const { cards } = useGetCards(undefined, setName);

    return (
        <Cards cards={cards} />
    )
}