import MainButton from '../../UI/my-buttons/MainButton';
import MarvelService from '../../services/MarvelService';
import Spinner from '../UI/spinner/Spinner';
import s from './PreviewRandom.module.scss';

const marvelService = new MarvelService();

import { useEffect, useState } from 'react';

const PreviewRandom = () => {
	const [charLoading, setCharLoading] = useState(true);
	const [charData, setCharData] = useState({});

	useEffect(() => {
		marvelService
			.getCharacter(marvelService.getRandomId(1011334, 1010903))
			.then(data => {
				setCharData(data);
				setCharLoading(false);
			});
	}, []);

	return (
		<section className={s.preview}>
			<div className={s.randomHero}>
				{charLoading ? <Spinner /> : <RandomHero char={charData} />}
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

function RandomHero({ char }) {
	const {
		name,
		description,
		thumbnail: { path, extension },
		urls: [homepage, wiki],
	} = char;

	return (
		<>
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
		</>
	);
}
export default PreviewRandom;
