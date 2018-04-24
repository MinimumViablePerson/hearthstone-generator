import styled from 'styled-components'

export default styled.div`
    position: absolute;
    left: calc(50% - 10vw);
    top: -2vw;

    width: 20vw;
    height: 29vw;

    border-radius: 50%;
    background: url(${props => props.src}) center;
    background-repeat: no-repeat;
    background-size: cover;
`
