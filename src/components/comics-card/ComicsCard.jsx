import s from './ComicsCard.module.scss';
import { NavLink } from 'react-router-dom';
const ComicsCard = props => {
  const {
    id,
    title,
    thumbnail: { extension, path },
  } = props.comics;

  return (
    <NavLink
      className={({ isActive }) => (isActive ? `${s.isActive}` : null)}
      to={`/comics/${id}`}
    >
      <div className={s.comicsCard}>
        <img
          style={
            path.includes('image_not_available') ? { objectFit: 'fill' } : null
          }
          width={225}
          height={346}
          src={`${path}.${extension}`}
          alt='Comics book cover'
        />
        <div className={s.comicsDescr}>
          <h3 className='title'>{title}</h3>
        </div>
      </div>
    </NavLink>
  );
};

export default ComicsCard;
