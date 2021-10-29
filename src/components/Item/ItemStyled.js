import styled from 'styled-components'
import theme from 'utils/theme'

export const CardStyled = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;  
  width: 15%;
  height: 350px;
  border: 1px solid white;
  :hover {
    opacity: .9;
    cursor: pointer;
  }
`

export const ImgStyled = styled.div`
  background-color: pink;
  background-image: ${props => `url(${props.background})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 250px; 
  margin-bottom: 10px;
`

export const CardBodyStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100px; 
  padding: 0 10px;
  h4 {
    color: black;
    margin: 0;
    padding: 0;
    font-size: 1.2rem;
    font-weight: 200;
  }
  h5 {
    color: ${theme.colors.base};
    font-weight: bolder;
    margin: 0;
    padding: 0;
    letter-spacing: 2px;
  }
`

export const CardFooterStyled = styled.div`
  width: 100%;
  p {
    margin: 0;
    padding: 0;
    font-size: .9rem;
    font-weight: 100;
  }
`
