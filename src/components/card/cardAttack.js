import styled from 'styled-components'

export default styled.div`
    position: absolute;
    bottom: -1vw;
    left: -3vw;

    width: 9vw;
    height: 9vw;

    border-radius: 50%;
    background: url("assets/images/card-part-attack.png") center;
    background-repeat: no-repeat;
    background-size: contain;

    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding-top: 2vw;
    padding-left: 1vw;


    font-size: 6vw;

    color: white;
    text-shadow:
        -1px 0 rgba(0,0,0,0.7),
        0 1px rgba(0,0,0,0.7),
        1px 0 rgba(0,0,0,0.7),
        0 -1px rgba(0,0,0,0.7);
`
