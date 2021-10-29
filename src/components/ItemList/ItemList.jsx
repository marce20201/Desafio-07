import Item from 'components/Item/Item'
import React, {useState, useEffect} from 'react'
import itemMock from 'utils/mocks/items'
import {ItemListStyled, MessageStyled} from './ItemListStyled'

const getItemsMock = () => new Promise((resolve, reject) => {
	setTimeout(() => itemMock
		? resolve(itemMock)
		: reject(new Error('getItems Error'))
	, 2000)
})

const ItemList = () => {
	const [items, setItems] = useState(null)
	useEffect(() => setItemsMock(), [])

	const setItemsMock = async () => {
		try {
			const products = await getItemsMock()
			setItems(products)
		} catch (error) {
			console.log('ERROR', 'Algo malio sal', error)
		}
	}

	return (
		<ItemListStyled>
			{
				items
					? items.length
						? items.map(item => <Item key={item.id} {...item} />)
						: <MessageStyled><p>No hay productos disponibles</p></MessageStyled>
					: <MessageStyled><p>Cargando productos...</p></MessageStyled>
			}
		</ItemListStyled>
	)
}

export default ItemList
