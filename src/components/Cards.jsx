import React from 'react'
import Card from './Card'

export default function Cards({ cards }) {
    return (
        <div className='border border-dark'>
            {cards.map(card => {
                return (
                    <Card key={card.id} card={card} />
                )
            })}
        </div>
    )
}
