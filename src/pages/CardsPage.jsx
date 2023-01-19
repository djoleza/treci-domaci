import React from 'react'
import { useState } from 'react';
import Card from '../components/Card';
import Pagination from '../components/Pagination';
import { useGetCards } from '../hooks/api'

export default function CardsPage() {
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(0);
    const { cards, total } = useGetCards(search, undefined, page);
    return (
        <div className='container mt-2 '>
            <h2 className='text-center'>
                Cards
            </h2>
            <div className='py-3'>
                <input className='form-control' placeholder='Search' value={search} onChange={e => {
                    setSearch(e.currentTarget.value);
                }} />
            </div>
            <div className='border border-dark'>
                {cards.map(card => {
                    return (
                        <Card key={card.id} card={card} />
                    )
                })}
            </div>
            <div className='mt-2'>
                <Pagination
                    page={page + 1}
                    setPage={val => setPage(val - 1)}
                    size={20}
                    total={total}
                />
            </div>
        </div>
    )
}
