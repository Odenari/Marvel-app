import { DetailsLoader } from '../components/UI/skeletons/DetailsLoader';
import Spinner from '../components/UI/spinner/Spinner';
import PreviewRandom from '../components/preview/PreviewRandom';
import HeroCard from '../components/hero-card/HeroCard';
import HeroDetails from '../components/hero-details/HeroDetails';
import MainButton from '../components/UI/my-buttons/MainButton';
import Form from '../components/form/Form';

import { useEffect, useState, useRef } from 'react';
import MarvelService from '../services/MarvelService';

const MService = new MarvelService();

async function getHeroes() {
	const heroes = await MService.getAllCharacters();
	return heroes;
}

function Home({ detailed = true, formFlag = true }) {
	const [isLoading, setIsLoading] = useState(false);

	const cardsRef = useRef([]);
	const getRefs = ref => {
		cardsRef.current.push(ref);
	};

	const setIndex = elements => {
		const pureArr = elements.filter(item => item);
		let index = 0;
		for (let elem of pureArr) {
			elem.tabIndex = ++index;
		}
		cardsRef.current = pureArr;
	};

	const [heroDetails, setHeroDetails] = useState(null);
	function handleDetails(id) {
		if (!id) null;
		setHeroDetails(heroesCards.find(hero => hero.id === id));
	}

	const [heroesCards, setHeroesCards] = useState(null);

	const handleMoreHeroes = async () => {
		setIsLoading(true);
		const offset = heroesCards.length;
		const moreHeroes = await MService.getAllCharacters(offset);
		setIsLoading(false);
		setHeroesCards(prev => [...prev, ...moreHeroes]);
	};
	useEffect(() => {
		getHeroes()
			.then(res =>
				setHeroesCards(prev => {
					if (!prev) return [...res];
					else return [...prev];
				})
			)
			.then(() => {
				setIndex(cardsRef.current);
				cardsRef.current ?? cardsRef.current[0].focus();
			})
			.catch(e => console.log(e.message));
	}, [isLoading]);

	return (
		<>
			<PreviewRandom />
			<h2 style={{ margin: '0 auto', fontSize: '1.8rem', marginBottom: '1em' }}>
				Click on hero to see more details
			</h2>
			<section className='content'>
				<div className='cards-container'>
					{Array.isArray(heroesCards) ? (
						heroesCards.map(hero => (
							<HeroCard
								ref={getRefs}
								data={hero}
								key={hero.id}
								pickHero={id => handleDetails(id)}
							/>
						))
					) : (
						<Spinner />
					)}
				</div>
				{detailed && formFlag ? (
					<div className='aside-content'>
						{heroDetails ? (
							<HeroDetails char={heroDetails} />
						) : (
							<DetailsLoader />
						)}
						<Form />
					</div>
				) : (
					<div className='aside-content'></div>
				)}
			</section>
			<div className='btn-wrapper'>
				<MainButton
					isLoading={isLoading}
					handleMoreHeroes={handleMoreHeroes}
					width='170px'
				>
					LOAD MORE
				</MainButton>
			</div>
		</>
	);
}
export default Home;
