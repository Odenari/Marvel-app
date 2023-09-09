import './Comics.scss';

import Banner from '../../components/banner/Banner';
import ComicsCard from '../../components/comics-card/ComicsCard';
import ComicsInfo from './comicsInfo/ComicsInfo';

import useMarvelService from '../../services/MarvelService';

import { useState, useEffect } from 'react';
import Spinner from '../../components/UI/spinner/Spinner';

const Comics = () => {
  const { getNewComics, loading } = useMarvelService();
  const [newComics, setNewComics] = useState([]);

  useEffect(() => {
    getNewComics().then(comics => {
      setNewComics(comics);
      // console.log(comics);
    });
  }, [getNewComics]);
  return (
    <>
      <div className='container'>
        <Banner />
        <div className='comicsContainer'>
          {loading ? (
            <Spinner />
          ) : newComics ? (
            newComics.map(item => {
              return <ComicsCard comics={item} key={item.id} />;
            })
          ) : (
            <Spinner />
          )}
        </div>
        {/* <ComicsInfo /> */}
      </div>
    </>
  );
};

export default Comics;
