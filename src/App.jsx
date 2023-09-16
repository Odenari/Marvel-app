import 'reset-css';
import './Style.scss';

import { Routes, Route } from 'react-router-dom';
import { Header } from '../src/components/header/Header';
import { Suspense, lazy } from 'react';
import Spinner from './components/UI/spinner/Spinner';
import SingleComicsInfo from './pages/comics/comicsInfo/SingleComicsInfo.jsx';

//named export of Home component should've a default that contain our component as value. So in named export we did added manually this field inside then() when resolve a promise
const Home = lazy(() =>
  import('./pages/Home.jsx').then(module => ({ default: module['Home'] }))
);

//default exports contains a "default" field automatically
const Comics = lazy(() => import('./pages/comics/Comics.jsx'));
const Page404 = lazy(() => import('./pages/404.jsx'));

function App() {
  return (
    <div className='container'>
      <header>
        <Header />
      </header>
      <main>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/comics' element={<Comics />} />
            <Route path={`comics/:comicsId/`} element={<SingleComicsInfo />} />
            <Route path='*' element={<Page404 />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
