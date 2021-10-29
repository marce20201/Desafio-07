import ItemDetail from 'components/ItemDetail/ItemDetail'
import {useEffect, useState} from 'react'
import itemMock from 'utils/mocks/items'

console.log('itemMock[0]', itemMock[0])

const getItemMock = () => new Promise((resolve, reject) => {
	setTimeout(() => itemMock[0]
		? resolve(itemMock[0])
		: reject(new Error('getItems Error'))
	, 2000)
})

const ItemDetailContainer = () => {
	const [item, setItem] = useState(null)
	useEffect(() => setItemMock(), [])
	console.log('item', item)

	const setItemMock = async () => {
		try {
			const product = await getItemMock()
			setItem(product)
		} catch (error) {
			console.log('ERROR', 'Algo malio sal', error)
		}
	}

	return (
		<div>
			<p>Desafio 7</p>
			{item && <ItemDetail {...item} />}
		</div>
	)
}

export default ItemDetailContainer
