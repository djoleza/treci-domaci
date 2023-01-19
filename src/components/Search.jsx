import React from 'react'

export default function Search({ search, setSearch }) {
    return (
        <div className='py-3'>
            <input className='form-control' placeholder='Search' value={search} onChange={e => {
                setSearch(e.currentTarget.value);
            }} />
        </div>
    )
}
