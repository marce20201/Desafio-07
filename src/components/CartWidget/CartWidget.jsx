import CartIcon from 'components/Icons/CartIcon'
import {CartWidgetStyled} from './CartWidgetStyled'

const CartWidget = () => (
	<CartWidgetStyled href="/cart">
		<CartIcon />
		<span>4</span>
	</CartWidgetStyled>
)

export default CartWidget
