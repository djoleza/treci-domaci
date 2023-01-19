import React from 'react'
import { useState } from 'react'
import Pagination from '../components/Pagination';
import Search from '../components/Search';
import Set from '../components/Set';
import { useGetSets } from '../hooks/api';

export default function SetsPage() {
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(0);
    const sets = useGetSets();
    return (
        <div className='container mt-2 '>
            <h2 className='text-center'>
                Card sets
            </h2>
            <Search search={search} setSearch={setSearch} />
            {
                sets
                    .filter(set => {
                        return set.set_name.includes(search) ||
                            set.set_code.includes(search)
                    })
                    .slice(10 * page, 10 * (page + 1))
                    .map(set => {
                        return (
                            <Set key={set.set_code} set={set} />
                        )
                    })
            }
            <div className='mt-2'>
                <Pagination
                    page={page + 1}
                    setPage={val => setPage(val - 1)}
                    size={10}
                    total={sets.length}
                />
            </div>
        </div>
    )
}
