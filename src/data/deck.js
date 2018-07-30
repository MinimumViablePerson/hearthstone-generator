// @flow

import type {Card} from '../types/card'

const anomalus: Card = {
    type: 'minion',
    family: 'elemental',
    class: 'neutral',
    rarity: 'legendary',
    image: '/assets/images/anomalus.jpg',
    golden: false,
    name: 'Anomalus',
    text: 'Deathrattle: Deal 8 damage to all minions.',
    mana: 8,
    attack: 8,
    health: 6
}

const nicolas: Card = {
    type: 'minion',
    family: 'beast',
    class: 'neutral',
    rarity: 'epic',
    image: '/assets/images/nicolas.jpg',
    golden: false,
    name: 'Nicolas',
    text: 'Battlecry: Annoy everyone.',
    mana: 5,
    attack: 3,
    health: 6
}

const pao: Card = {
    type: 'minion',
    family: 'beast',
    class: 'neutral',
    rarity: 'epic',
    image: '/assets/images/nicolas.jpg',
    golden: false,
    name: 'Paola the Destroyer',
    text: 'Battlecry: No me da pelota.',
    mana: 5,
    attack: 3,
    health: 6
}

export const deck: Array<Card> = [anomalus, nicolas, pao]
