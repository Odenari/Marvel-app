import s from './ComicsCard.module.scss';

const ComicsCard = props => {
  const {
    title,
    thumbnail: { extension, path },
  } = props.comics;
  console.log(props.comics);
  return (
    <div className={s.comicsCard}>
      <img
        width={225}
        height={346}
        src={`${path}.${extension}`}
        // alt={`Comics - `}
      />
      <div className={s.comicsDescr}>
        <h3 className='title'>{title}</h3>
      </div>
    </div>
  );
};

export default ComicsCard;
