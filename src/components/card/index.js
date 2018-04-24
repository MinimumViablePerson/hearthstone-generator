import * as React from 'react'
import styled from 'styled-components'

import CardName from './cardName'
import CardImage from './cardImage'
import CardMana from './cardMana'
import CardText from './cardText'
import CardHealth from './cardHealth'
import CardAttack from './cardAttack'

export const Card = ({card, className}) => (
    <div className={className}>
        <CardMana>{card.mana}</CardMana>
        <CardImage src={card.image}/>
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
    background: url("/assets/images/template-cards/neutral_legendary_monster_empty_card_by_demaretc-d8ea24s.png");
    background-repeat: no-repeat;
    background-size: contain;

    font-family: sans-serif;
`
