import {useState} from 'react'
import PropTypes from 'prop-types'
import {ButtonStyled, ItemCountStyled, ButtonActionStyled} from './ItemCountStyled'

const ItemCount = ({stock, initial = 0, onAdd}) => {
	const [count, setCount] = useState(initial)
	return (
		<ItemCountStyled>
			<div>
				<ButtonStyled disabled={stock === 0 || count <= 0} onClick={() => setCount(count - 1)}>-</ButtonStyled>
				<span>{stock === 0 ? 'Sin stock' : count}</span>
				<ButtonStyled disabled={stock === 0 || count >= stock } onClick={() => setCount(count + 1)}>+</ButtonStyled>
			</div>
			<ButtonActionStyled disabled={stock === 0 || count <= 0 || count > stock} onClick={() => onAdd(count)}>Agregar al carrito</ButtonActionStyled>
			<span className="total-stock">Stock: {stock - count}</span>
		</ItemCountStyled>
	)
}

ItemCount.propTypes = {
	stock: PropTypes.number.isRequired,
	initial: PropTypes.number,
	onAdd: PropTypes.func.isRequired,
}

export default ItemCount
