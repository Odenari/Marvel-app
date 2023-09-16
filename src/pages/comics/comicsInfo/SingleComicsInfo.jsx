import s from './SingleComicsInfo.module.scss';
import Banner from '../../../components/banner/Banner';
import Spinner from '../../../components/UI/spinner/Spinner';
import useMarvelService from '../../../services/MarvelService';
import Page404 from '../../404';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const SingleComicsInfo = () => {
  const { comicsId } = useParams();
  const [singleComics, setSingleComics] = useState();
  const { getSingleComics, loading, error } = useMarvelService();

  useEffect(() => {
    getSingleComics(comicsId).then(data => {
      setSingleComics(data);
    });
  }, [getSingleComics, comicsId]);

  if (error) {
    return <Page404 />;
  }

  return (
    <>
      <Banner />
      {singleComics ? (
        <ShowComics comicsData={singleComics} />
      ) : loading ? (
        <Spinner />
      ) : null}
    </>
  );
};

const ShowComics = ({ comicsData }) => {
  const { price, description, title, thumbnail, langs, pages } = comicsData;
  let styleForNotFoundImg = { marginRight: '.725em' };

  if (thumbnail.path.includes('image_not_available')) {
    styleForNotFoundImg.objectFit = 'fill';
  }
  return (
    <div className={s.comicsInfo}>
      <img
        style={styleForNotFoundImg}
        width={293}
        height={450}
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt={title}
      />
      <div className={s.descrWrapper}>
        <h3 className={s.title}>{title}</h3>
        <p className={s.descr}>{description}</p>
        <div>Length: {pages} pages</div>
        <div>Language: {langs}</div>
        <p className={typeof price === 'number' ? s.price : s.noPrice}>
          Price: {typeof price === 'number' ? price + ' $' : price}
        </p>
      </div>
      <Link
        to={'/comics'}
        style={{
          textDecoration: 'underline',
          color: '#9f0013',
        }}
      >
        Back to all comics
      </Link>
    </div>
  );
};
export default SingleComicsInfo;
