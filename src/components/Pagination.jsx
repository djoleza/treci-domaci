import React from 'react'

export default function Pagination({
    page,
    setPage,
    size,
    total
}) {
    const totalPages = Math.ceil(total / size);
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li onClick={() => {
                    setPage(prev => Math.max(1, prev - 1))
                }} className="page-item">
                    <div className="page-link">
                        <span aria-hidden="true">&laquo;</span>
                    </div>
                </li>
                <div className="pagination" style={{
                    overflowX: 'auto'
                }}>
                    {
                        new Array(totalPages).fill(0).map((element, index) => {
                            return (
                                <li onClick={() => {
                                    setPage(index + 1)
                                }} className={`page-item ${index === page - 1 ? 'active' : ''}`} key={index}>
                                    <div className='page-link'>
                                        {index + 1}
                                    </div>
                                </li>
                            )
                        })
                    }
                </div>
                <li onClick={() => {
                    setPage(prev => Math.min(prev + 1, totalPages))
                }} className="page-item">
                    <div className="page-link">
                        <span aria-hidden="true">&raquo;</span>
                    </div>
                </li>
            </ul>
        </nav>
    )
}
