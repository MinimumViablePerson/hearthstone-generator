import styled from 'styled-components'

export default styled.div`
    position: absolute;
    left: 20%;
    top: 6%;
    z-index: -1;

    width: 60%;
    height: 55%;

    border-radius: 50%;
    background: url(${props => props.src}) center;
    background-repeat: no-repeat;
    background-size: cover;
`
