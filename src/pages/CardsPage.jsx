import React from 'react'
import { useState } from 'react';
import Card from '../components/Card';
import { useGetCards } from '../hooks/api'

export default function CardsPage() {
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(0);
    const { cards } = useGetCards(search, undefined, page);
    return (
        <div className='container mt-2'>
            <h2 className='text-center'>
                Cards
            </h2>
            <div className='py-3'>
                <input className='form-control' placeholder='Search' value={search} onChange={e => {
                    setSearch(e.currentTarget.value);
                }} />
            </div>
            <div className='cardsContainer'>
                {cards.map(card => {
                    return (
                        <Card key={card.id} card={card} />
                    )
                })}
            </div>
        </div>
    )
}
