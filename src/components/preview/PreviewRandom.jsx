import MainButton from '../../UI/my-buttons/MainButton';
import s from './PreviewRandom.module.scss';

import MarvelService from '../../services/MarvelService';
const marvelService = new MarvelService();
const heroInfo = await marvelService.getCharacter(
	marvelService.getRandomId(1011334, 1010903)
);

const PreviewRandom = () => {
	const {
		name,
		description,
		thumbnail: { path, extension },
		urls: [homepage, wiki],
	} = heroInfo;

	return (
		<section className={s.preview}>
			<div className={s.randomHero}>
				<img
					src={`${path}.${extension}`}
					alt='Hero preview'
					className={s.heroThumbnail}
				/>
				<div className={s.heroDescr}>
					<h2>{name}</h2>
					<p>
						{description.length > 228
							? description.slice(0, 225).concat('...')
							: description.concat('...')}
					</p>
					<div className={s.btnsBlock}>
						<MainButton path={homepage}>HOMEPAGE</MainButton>
						<MainButton path={wiki} color='#5C5C5C'>
							WIKI
						</MainButton>
					</div>
				</div>
			</div>
			<div className={s.tryRandom}>
				<div>
					<h2>Random character for today!</h2>
					<h3>Do you want to get to know him better?</h3>
				</div>
				<h4>Or choose another one</h4>
				<MainButton>TRY IT</MainButton>
			</div>
		</section>
	);
};

export default PreviewRandom;
