import 'reset-css'
import './Style.scss'

import { Header } from '../src/components/header/Header'
import PreviewRandom from './components/preview/PreviewRandom'
import HeroCard from './components/hero-card/HeroCard'
import HeroDetails from './components/hero-details/HeroDetails'
import MainButton from './UI/my-buttons/MainButton'
import Form from './components/form/Form'
import PreloaderDetails from './components/preloader-details/PreloaderDetails'

function App() {
	return (
		<div className='container'>
			<Header />
			<PreviewRandom />
			<section className='content'>
				<div className='cards-container'>
					<HeroCard />
					<HeroCard />
					<HeroCard />
					<HeroCard />
					<HeroCard />
					<HeroCard />
					<HeroCard />
					<HeroCard />
				</div>
				<div className='aside-content'>
					<HeroDetails></HeroDetails>
					<Form />
				</div>
			</section>
			<div className='btn-wrapper'>
				<MainButton width='170px'>LOAD MORE</MainButton>
			</div>
			<PreloaderDetails />
		</div>
	)
}

export default App
