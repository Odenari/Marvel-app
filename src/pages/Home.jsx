import PreviewRandom from '../components/preview/PreviewRandom';
import HeroCard from '../components/hero-card/HeroCard';
import HeroDetails from '../components/hero-details/HeroDetails';
import MainButton from '../UI/my-buttons/MainButton';
import Form from '../components/form/Form';
import PreloaderDetails from '../components/preloader-details/PreloaderDetails';

import MarvelService from '../services/MarvelService';
const marvelService = new MarvelService();
const heroes = await marvelService.getAllCharacters();
function Home({ detailed = true, formFlag = true }) {
	return (
		<>
			<PreviewRandom />
			<section className='content'>
				<div className='cards-container'>
					{heroes.map(hero => (
						<HeroCard data={hero} key={hero.id} />
					))}
				</div>
				{detailed && formFlag ? (
					<div className='aside-content'>
						<HeroDetails />
						<Form />
					</div>
				) : (
					<div className='aside-content'></div>
				)}
			</section>
			<div className='btn-wrapper'>
				<MainButton width='170px'>LOAD MORE</MainButton>
			</div>
			<PreloaderDetails />
		</>
	);
}
export default Home;
