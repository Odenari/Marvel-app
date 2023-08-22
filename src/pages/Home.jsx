import PreviewRandom from '../components/preview/PreviewRandom';
import HeroCard from '../components/hero-card/HeroCard';
import HeroDetails from '../components/hero-details/HeroDetails';
import MainButton from '../components/UI/my-buttons/MainButton';
import Form from '../components/form/Form';

import { DetailsLoader } from '../components/UI/skeletons/DetailsLoader';

import { useState } from 'react';
import MarvelService from '../services/MarvelService';

const MService = new MarvelService();
const heroes = await MService.getAllCharacters();
const cardsAmount = 9;

function Home({ detailed = true, formFlag = true }) {
	const [heroesCards, setHeroesCards] = useState(heroes);
	const [heroDetails, setHeroDetails] = useState(null);

	function handleDetails(id) {
		if (!id) null;
		setHeroDetails(heroesCards.find(hero => hero.id === id));
	}

	const handleMoreHeroes = async () => {
		let offset = heroesCards.length;
		const moreHeroes = await MService.getAllCharacters(offset + cardsAmount);
		MService.newOffset += cardsAmount;
		setHeroesCards(prev => [...prev, ...moreHeroes]);
		console.log(moreHeroes);
	};

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
				<MainButton handleMoreHeroes={handleMoreHeroes} width='170px'>
					LOAD MORE
				</MainButton>
			</div>
		</>
	);
}
export default Home;
