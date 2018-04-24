// @flow

type CardType =
    'spell'
    | 'minion'
    | 'dk'

type CardFamily =
    'elemental'
    | 'beast'
    | 'demon'

type CardClass =
    'all'
    | 'druid'
    | 'warrior'
    | 'mage'
    | 'rogue'
    | 'shaman'
    | 'priest'
    | 'warlock'
    | 'hunter'
    | 'paladin'

type CardRarity =
    'common'
    | 'rare'
    | 'epic'
    | 'legendary'

export type Card = {
    type: CardType,
    family?: CardFamily,
    class: CardClass,
    rarity?: CardRarity,
    image: string,
    golden: boolean,
    name: string,
    text?: string,
    mana: number,
    attack?: number,
    health?: number,
}
