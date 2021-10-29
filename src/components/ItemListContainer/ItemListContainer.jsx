import ItemList from 'components/ItemList/ItemList'
import PropTypes from 'prop-types'
import {ItemListContainerStyled} from './ItemListContainerStyled'

const ItemListContainer = ({greeting}) => (
	<ItemListContainerStyled>
		<h4>{greeting}</h4>
		<ItemList />
	</ItemListContainerStyled>
)

ItemListContainer.propTypes = {
	greeting: PropTypes.string.isRequired,
}

export default ItemListContainer
