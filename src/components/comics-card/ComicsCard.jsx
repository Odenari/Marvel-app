import s from './ComicsCard.module.scss'
const ComicsCard = () => {
	return (
		<div className={s.comicsCard}>
			<img
				width={225}
				height={346}
				src='/src/Assets/Comics/x-men.png'
				alt='X-Men vol.5'
			/>
			<div className={s.comicsDescr}>
				<h3 className='title'>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</h3>
				<span className='price'>9.99$</span>
			</div>
		</div>
	)
}

export default ComicsCard
