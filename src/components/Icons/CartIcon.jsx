import PropTypes from 'prop-types'
import {MdShoppingCart} from 'react-icons/md'
import {IconStyled} from './IconStyled'

const CartIcon = props => (
	<IconStyled {...props}>
		<MdShoppingCart />
	</IconStyled>
)

CartIcon.propTypes = {
	color: PropTypes.string,
	size: PropTypes.string,
}

export default CartIcon
