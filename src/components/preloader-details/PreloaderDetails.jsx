import s from './PreloaderDetails.module.scss'
const PreloaderDetails = () => {
	return (
		<div className={s.preloader}>
			<h3>Please select a character to see information</h3>
			<div className={s.head}>
				<div className={s.round}></div>
				<div className={s.slick}></div>
			</div>
			<div className={s.rectangle}></div>
			<div className={s.rectangle}></div>
			<div className={s.rectangle}></div>
		</div>
	)
}

export default PreloaderDetails
