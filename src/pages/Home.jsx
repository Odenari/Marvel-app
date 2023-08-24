import { DetailsLoader } from '../components/UI/skeletons/DetailsLoader';
import PreviewRandom from '../components/preview/PreviewRandom';
import HeroCard from '../components/hero-card/HeroCard';
import HeroDetails from '../components/hero-details/HeroDetails';
import MainButton from '../components/UI/my-buttons/MainButton';
import Form from '../components/form/Form';

import { useEffect, useState, useRef } from 'react';
import MarvelService from '../services/MarvelService';

const MService = new MarvelService();
const heroes = await MService.getAllCharacters();

function Home({ detailed = true, formFlag = true }) {
	const [isLoading, setIsLoading] = useState(false);

	const cardsRef = useRef([]);
	const getRefs = ref => {
		cardsRef.current.push(ref);
	};
	const setIndex = elements => {
		let index = 0;
		for (let elem of elements) {
			elem.tabIndex = ++index;
		}
	};
	const [heroDetails, setHeroDetails] = useState(null);
	function handleDetails(id) {
		if (!id) null;
		setHeroDetails(heroesCards.find(hero => hero.id === id));
	}

	const [heroesCards, setHeroesCards] = useState(heroes);
	const handleMoreHeroes = async () => {
		setIsLoading(true);
		const offset = heroesCards.length;
		const moreHeroes = await MService.getAllCharacters(offset);
		setIsLoading(false);
		setHeroesCards(prev => [...prev, ...moreHeroes]);
	};

	// const handleScroll = () => {
	// 	const alreadyScrolled = window.scrollY;
	// 	const amountOfScrollSpace =
	// 		document.documentElement.scrollHeight - window.innerHeight;

	// 	if (alreadyScrolled >= amountOfScrollSpace) {
	// 		handleMoreHeroes();
	// 	}
	// };

	useEffect(() => {
		// window.addEventListener('scroll', handleScroll);
		// return () => window.removeEventListener('scroll', handleScroll);
		// console.dir(cardsRef.current);
		setIndex(cardsRef.current);
		console.dir(cardsRef.current[8].tabIndex);
	}, [isLoading]);

	return (
		<>
			<PreviewRandom />
			<h2 style={{ margin: '0 auto', fontSize: '1.8rem', marginBottom: '1em' }}>
				Click on hero to see more details
			</h2>
			<section className='content'>
				<div className='cards-container'>
					{heroesCards.map(hero => (
						<HeroCard
							ref={getRefs}
							data={hero}
							key={hero.id}
							pickHero={id => handleDetails(id)}
						/>
					))}
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
