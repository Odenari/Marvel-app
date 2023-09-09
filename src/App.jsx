import 'reset-css';
import './Style.scss';

import { Routes, Route } from 'react-router-dom';
import { Header } from '../src/components/header/Header';
import Home from './pages/Home';
import Comics from './pages/comics/Comics';

function App() {
  return (
    <div className='container'>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/comics' element={<Comics />} />
          <Route path={`comics/info:`} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
