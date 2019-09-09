import React from 'react';
import './App.css';
import ColorBlock from './Components/ColorBlock';
import Clock from './Components/Clock';
import Products from './Components/Products';

function App() {
	return (
		<div className="App">
			<Products />
			<ColorBlock />
			<Clock />
		</div>
	);
}

export default App;
