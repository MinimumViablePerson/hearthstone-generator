import * as React from 'react'
import styled from 'styled-components'

import CardName from './cardName'
import CardImage from './cardImage'
import CardMana from './cardMana'
import CardText from './cardText'

export const Card = ({card, className}) => (
    <div className={className}>
        <CardMana>{card.mana}</CardMana>
        <CardImage src={card.image}/>
        <CardName>{card.name}</CardName>
        <CardText>{card.text}</CardText>
    </div>
)

export default styled(Card)`
    background: #555555;
    margin: 10px;
`
