import PropTypes from 'prop-types'
import {CardBodyStyled, CardStyled, ImgStyled, CardFooterStyled} from './ItemStyled'

const Item = ({
	// Id,
	// brand,
	// category,
	// color,
	images,
	price,
	// Sex,
	// size,
	stock,
	title}) => (
	<CardStyled href={'/'}>
		<ImgStyled background={images[0]} />
		<CardBodyStyled>
			<h4>{title}</h4>
			<h5>${price}</h5>
		</CardBodyStyled>
		<CardFooterStyled>
			<p>Stock disponible: {stock}</p>
		</CardFooterStyled>

	</CardStyled>
)

Item.propTypes = {
	id: PropTypes.string.isRequired,
	brand: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	color: PropTypes.array.isRequired,
	images: PropTypes.array.isRequired,
	price: PropTypes.number.isRequired,
	sex: PropTypes.string.isRequired,
	size: PropTypes.array.isRequired,
	stock: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
}

export default Item
