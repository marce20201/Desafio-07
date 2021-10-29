import ItemCount from 'components/ItemCount/ItemCount'
import PropTypes from 'prop-types'
import {ColorBoxStyled, ImgStyled, ItemDescriptionStyled, ItemDetailStyled, ItemFooterStyled, ItemHeaderStyled, ListHStyled, TagStyled} from './ItemDetailStyled'

const handleSizes = sizes => (
	<ListHStyled>
		{sizes.length && sizes.map(size => <li key={size}><span>{size}</span></li>)}
	</ListHStyled>
)

const handleColors = colors => (
	<ListHStyled>
		{colors.length && colors.map(color => <li key={color}><ColorBoxStyled background={color} ></ColorBoxStyled></li>)}
	</ListHStyled>
)

const ItemDetail = ({
	// Id,
	brand,
	category,
	color,
	images,
	price,
	sex,
	size,
	stock,
	title}) => (
	<ItemDetailStyled>
		<div className="image-box">
			<ImgStyled background={images[0]} />
		</div>
		<div className="detail-box">
			<ItemHeaderStyled>
				<h4>{title}</h4>
				<h5>${price}</h5>
				<div className="item-count-box">
					<ItemCount stock={stock} initial={1} onAdd={() => console.log(true)} />
				</div>
			</ItemHeaderStyled>
			<ItemDescriptionStyled>
				<p>
					<span>Marca: </span>
					{brand}
				</p>
				<p>
					<span>Talles disponibles: </span>
					{handleSizes(size)}
				</p>
				<p>
					<span>Colores disponibles: </span>
					{handleColors(color)}
				</p>
			</ItemDescriptionStyled>
			<ItemFooterStyled>
				<TagStyled>{category}</TagStyled>
				<TagStyled>{sex}</TagStyled>
			</ItemFooterStyled>
		</div>
	</ItemDetailStyled>
)

ItemDetail.propTypes = {
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

export default ItemDetail
