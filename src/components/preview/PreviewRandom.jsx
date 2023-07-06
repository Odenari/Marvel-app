import MainButton from '../../UI/my-buttons/MainButton'
import s from './PreviewRandom.module.scss'
const PreviewRandom = () => {
	return (
		<section className={s.preview}>
			<div className={s.randomHero}>
				<img src='/src/Assets/THOR.png' alt='Card preview' />
				<div className={s.heroDescr}>
					<h2>THOR</h2>
					<p>
						As the Norse God of thunder and lightning, Thor wields one of the
						greatest weapons ever made, the enchanted hammer Mjolnir. While
						others have described Thor as an over-muscled, oafish imbecile, he
						{`'`}s quite smart and compassionate...
					</p>
					<div className={s.btnsBlock}>
						<MainButton>HOMEPAGE</MainButton>
						<MainButton color='#5C5C5C'>WIKI</MainButton>
					</div>
				</div>
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
	)
}

export default PreviewRandom
