import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
    margin: 0;
    text-align: center;
    color: #736c60;
`;

const Title = () => {
    return (
        <header>
            <StyledTitle>
                Shitty Todo <span role="img" aria-label="poop">💩</span>
            </StyledTitle>
        </header>
    )
}

export default Title
