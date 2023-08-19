import s from './HeroCard.module.scss';
const HeroCard = props => {
	const {
		name,
		thumbnail: { path, extension },
	} = props.data;

	const nameForRender = name => {
		if (name.match(/\(/g)) {
			return name.slice(0, name.indexOf('(')).toUpperCase();
		} else {
			return name;
		}
	};

	return (
		<div
			className={s.card}
			onClick={() => {
				props.pickHero(props.data.id);
			}}
		>
			<div className='hero-card'>
				<img
					className={
						path ===
						'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
							? s.imgNotFound
							: null
					}
					src={`${path}.${extension}`}
					alt='hero avatar'
				/>
				<h3>{nameForRender(name)}</h3>
			</div>
		</div>
	);
};

export default HeroCard;
