import React from 'react'

export default function Card({ card }) {
    return (
        <div className='px-3 border border-dark'>
            <div className='p-2 border-bottom d-flex justify-content-between '>
                <strong> {card.name}</strong>
            </div>
            {
                (card.type === 'Spell Card' || card.type === 'Trap Card') ? (
                    <SpellCardInfo card={card} />
                ) : (
                    <MonsterCardInfo card={card} />
                )
            }
            <div className='p-2  border-bottom'>
                {card.desc}
            </div>
        </div>
    )
}

function MonsterCardInfo({ card }) {
    return (
        <div className='d-flex border-bottom p-1'>
            <div className='p-2 border border-top-0 border-left-0 border-bottom-0'>
                {card.type}
            </div>
            <div className='p-2 border border-top-0 border-left-0 border-bottom-0 '>
                {card.attribute}
            </div>
            <div className='p-2 border border-top-0 border-left-0 border-bottom-0 '>
                {`Level ${card.level}`}
            </div>
            <div className='p-2 border border-top-0 border-left-0 border-bottom-0 '>
                {card.race}
            </div>
            <div className='p-2 border border-top-0 border-left-0 border-bottom-0 '>
                {`ATK ${card.atk} / DEF ${card.def}`}
            </div>
        </div>
    )
}

function SpellCardInfo({ card }) {
    return (
        <div className='d-flex border-bottom'>
            <div className='p-2 border border-top-0 border-left-0 border-bottom-0'>
                {card.type}
            </div>
            <div className='p-2 border border-top-0 border-left-0 border-bottom-0 '>
                {card.race}
            </div>
        </div>
    )
}
