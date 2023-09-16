import './Comics.scss';
import MainButton from '../../components/UI/my-buttons/MainButton';

import Banner from '../../components/banner/Banner';
import Spinner from '../../components/UI/spinner/Spinner';
import Page404 from '../404';
import ComicsCard from '../../components/comics-card/ComicsCard';
import useMarvelService from '../../services/MarvelService';
import { useState, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const Comics = () => {
  const { getNewComics, loading } = useMarvelService();
  const [newComics, setNewComics] = useState([]);

  const handleMoreComics = async () => {
    const offset = newComics.length;
    const moreComics = await getNewComics(offset);
    setNewComics(prev => [...prev, ...moreComics]);
  };

  useEffect(() => {
    getNewComics().then(comics => {
      setNewComics(comics);
    });
  }, [getNewComics]);

  const renderComics = comicsList => {
    return comicsList.map(item => {
      return (
        <li key={item.id + Math.random()}>
          <ComicsCard comics={item} />
        </li>
      );
    });
  };

  return (
    <>
      <div className='container'>
        <Banner />
        <ErrorBoundary fallback={<Page404 />}>
          <div>
            {loading && !newComics.length === 0 ? (
              <Spinner />
            ) : (
              <ul className='comicsContainer'>{renderComics(newComics)}</ul>
            )}
          </div>
        </ErrorBoundary>
      </div>
      <div className='btn-wrapper'>
        <MainButton
          isLoading={loading}
          handleMoreHeroes={handleMoreComics}
          width='170px'
        >
          LOAD MORE
        </MainButton>
      </div>
    </>
  );
};
export default Comics;
