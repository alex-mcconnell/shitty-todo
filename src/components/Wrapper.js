import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
    padding: 3em 3em 0 3em;
`;

const Wrapper = ({children}) => {
    return <StyledWrapper>{children}</StyledWrapper>
}

export default Wrapper
