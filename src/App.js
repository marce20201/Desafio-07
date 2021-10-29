import ItemDetailContainer from 'components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from 'components/ItemListContainer/ItemListContainer';
import Navbar from 'components/Navbar/Navbar'

const App = () => (
	<div className="App">
		<Navbar />
		<ItemListContainer greeting={'Productos destacados'} />
		<ItemDetailContainer />
	</div>
);

export default App
