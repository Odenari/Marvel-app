import 'reset-css';
import './Style.scss';

import { Routes, Route } from 'react-router-dom';
import { Header } from '../src/components/header/Header';
import Home from './pages/Home';

function App() {
	return (
		<div className='container'>
			<header>
				<Header />
			</header>
			<main>
				<Routes>
					<Route path='/' exact element={<Home />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
