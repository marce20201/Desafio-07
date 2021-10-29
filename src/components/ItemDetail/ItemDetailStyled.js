import styled from 'styled-components'
import theme from 'utils/theme'

export const ItemDetailStyled = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: space-between;
	.image-box {
		width: 60%;
	}
	.detail-box {
		width: 40%;
	}
`

export const ImgStyled = styled.div`
  background-image: ${props => `url(${props.background})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 250px; 
`

export const ItemHeaderStyled = styled.div`
	padding: 30px;
	h4 {
		font-size: 1.25rem;
	}
	h5 {
		font-size: 1.25rem;
		color: ${theme.colors.base};
		letter-spacing: 1px;
	}
	.item-count-box {
		margin-top: 20px;
		padding: 10px 0px;
	}
`

export const ItemDescriptionStyled = styled.div`
	padding: 30px;
	width: 100%;
	p {
		font-size: .9rem;
		padding: 5px;
		display: flex;
		align-items: center;		
		span {
			margin-right: 10px;
			font-weight: 300;
		}
	}
`

export const ListHStyled = styled.ul`
	list-style: none;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	li {
		margin-right: 10px;		
		border-radius: 3px;
		width: 20px;
		height: 20px;
		span {
			font-size: .8rem;
			font-weight: bold;
		}
	}
	`

export const ColorBoxStyled = styled.div`
	background: ${props => props.background};
	width: 20px;
	height: 20px;
`
export const TagStyled = styled.span`
  background-color: ${theme.colors.secundary};
  padding: 5px 10px;
  border-radius: 5px;
  margin-right: 10px;
`

export const ItemFooterStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;
`
