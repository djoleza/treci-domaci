import React, { useState } from 'react';
import Cards from '../components/Cards';
import Pagination from '../components/Pagination';
import Search from '../components/Search';
import { useGetCards } from '../hooks/api';

export default function CardsPage() {
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(0);
    const { cards, total } = useGetCards(search, undefined, page);
    return (
        <div className='container mt-2 '>
            <h2 className='text-center'>
                Cards
            </h2>
            <Search search={search} setSearch={setSearch} />
            <Cards cards={cards} />
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
