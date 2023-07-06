import s from './HeroCard.module.scss'
const HeroCard = () => {
	return (
		<div className={s.card}>
			<div className='hero-card'>
				<img
					className='hero-avatar'
					src='/src/Assets/Callypso.jpg'
					alt='hero avatar'
				/>
				<h3>ABYSS</h3>
			</div>
		</div>
	)
}

export default HeroCard
