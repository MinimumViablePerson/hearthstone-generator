import styled from 'styled-components'

export default styled.div`
    position: absolute;
    top: -2vw;
    left: -2vw;

    width: 7vw;
    height: 7vw;

    border-radius: 50%;
    background: url("assets/images/card-part-mana.png") center;
    background-size: contain;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 6vw;

    color: white;
    text-shadow:
        -1px 0 rgba(0,0,0,0.7),
        0 1px rgba(0,0,0,0.7),
        1px 0 rgba(0,0,0,0.7),
        0 -1px rgba(0,0,0,0.7);
`
