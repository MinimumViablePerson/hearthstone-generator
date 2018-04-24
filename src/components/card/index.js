import * as React from 'react'
import styled from 'styled-components'

import CardName from './cardName'
import CardImage from './cardImage'
import CardRarity from './cardRarity'
import CardMana from './cardMana'
import CardText from './cardText'
import CardHealth from './cardHealth'
import CardAttack from './cardAttack'

export const Card = ({card, className}) => (
    <div className={className}>
        <CardMana>{card.mana}</CardMana>
        <CardImage src={card.image}/>
        { card.rarity && <CardRarity rarity={card.rarity} /> }
        <CardName>{card.name}</CardName>
        <CardText>{card.text}</CardText>
        { card.attack && <CardAttack>{card.attack}</CardAttack> }
        { card.health && <CardHealth>{card.health}</CardHealth> }
    </div>
)

export default styled(Card)`
    position: relative;

    margin: 10px;
    padding: 10px;
    width: 30vw;
    height: 45vw;

    border-radius: 10px;
    background: #999;

    font-family: sans-serif;
`
