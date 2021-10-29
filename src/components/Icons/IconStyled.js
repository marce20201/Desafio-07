import styled from 'styled-components'

export const IconStyled = styled.i`
  svg {
    color: ${props => props.color || 'black'};
    width: ${props => props.size || '20px'};
    height: ${props => props.size || '20px'};
  }
`
