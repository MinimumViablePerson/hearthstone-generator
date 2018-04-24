import styled from 'styled-components'

const getRarityColor = ({rarity}) => {
    switch (rarity) {
    case 'legendary':
        return 'orange'
    case 'epic':
        return 'purple'
    case 'rare':
        return 'blue'
    case 'common':
        return 'white'
    default:
        return
    }
}

export default styled.div`
    position: absolute;
    top: calc(50% + 1.7vw);
    left: calc(50% - 1.4vw);

    width: 2.8vw;
    height: 3.4vw;
    border-radius: 50%;

    background: ${getRarityColor};
`
