import styled from 'styled-components'

export const LinkStyled = styled.a`
  color: ${props => props.href ? 'black' : 'gray'};
  text-decoration: none;
  :hover {
    cursor: ${props => props.href ? 'pointer' : 'not-allowed'};
    opacity: 0.9;
  }
`
