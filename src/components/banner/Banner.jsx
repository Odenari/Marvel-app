import s from './Banner.module.scss'
const Banner = () => {
	return (
		<div className={s.banner}>
			<img src='/src/Assets/banner/AvengersTeam.png' alt='Avengers Team' />
			<div>
				<p className={s.descr}>New comics every week!</p>
				<p className={s.descr}>Stay tuned!</p>
			</div>
			<img src='/src/Assets/banner/Avengers logo.png' alt='Avengers logo' />
		</div>
	)
}

export default Banner
