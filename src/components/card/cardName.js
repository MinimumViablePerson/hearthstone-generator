import * as React from 'react'
import styled from 'styled-components'

const CardName = ({children, className}) => (
    <svg className={className} viewBox="0 0 242 250">
    <defs>
        <path id="text-path" d="M29,215c19.7,14.618,135.468-35.233,187-3"/>
    </defs>
    <text>
        <textPath startOffset="50%" href="#text-path">
            {children}
        </textPath>
    </text>
    </svg>
)

export default styled(CardName)`
    position: absolute;
    top: 5px;

    font-size: 1.3rem;
    text-anchor: middle;
    fill: #fff;
    font-family: sans-serif;
    font-weight: 500;
    text-shadow:
        -1px 0 rgba(0,0,0,1),
        0 1px rgba(0,0,0,1),
        1px 0 rgba(0,0,0,1),
        0 -1px rgba(0,0,0,1);
`
