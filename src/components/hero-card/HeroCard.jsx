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
		<div className={s.card}>
			<div className='hero-card'>
				<img
					className='hero-avatar'
					src={`${path}.${extension}`}
					alt='hero avatar'
				/>
				<h3>{nameForRender(name)}</h3>
			</div>
		</div>
	);
};

export default HeroCard;
