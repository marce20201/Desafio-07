import styled from 'styled-components'
import theme from 'utils/theme'

export const ItemCountStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  div {    
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 0;
    span {
      height: 100%;
      text-align: center;
      border-style: none;
      width: 50%;
    }
  }
  .total-stock {
    font-size: .75rem;
  }
`

export const ButtonStyled = styled.button`
  width: 25%;
  height: 100%;
  padding: 5px;
  border-style: none;
  border-radius: 3px;
  :hover {
    cursor: pointer;
    opacity: inherit.9;
  }
  &:disabled {
    cursor: not-allowed;
  }
`

export const ButtonActionStyled = styled.button`
  width: 100%;
  height: 50%;
  padding: 5px;
  border-style: none;
  border-radius: 3px;
  :hover {
    cursor: pointer;
    opacity: inherit.9;
    background-color: ${theme.colors.base2};
  }
  &:disabled {
    cursor: not-allowed;
  }
`
