import MainButton from '../../UI/my-buttons/MainButton'
import s from './HeroDetails.module.scss'
import Post from './posts/Post'
const HeroDetails = () => {
	return (
		<div className={s.heroDetails}>
			<div className={s.profileHeader}>
				<img src='/src/Assets/loki.png' alt='hero avatar' />
				<div>
					<h3>LOKI</h3>
					<MainButton>HOMEPAGE</MainButton>
					<MainButton color='#5C5C5C'>WIKI</MainButton>
				</div>
			</div>
			<p className={s.profileDescr}>
				In Norse mythology, Loki is a god or jötunn (or both). Loki is the son
				of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By
				the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the
				world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or
				Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in
				the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki
				is referred to as the father of Váli in the Prose Edda.
			</p>

			<div className={s.inComicsList}>
				<h2>Comics:</h2>
				<div className='list-of-comics'>
					<Post></Post>
					<Post></Post>
					<Post></Post>
					<Post></Post>
				</div>
			</div>
		</div>
	)
}

export default HeroDetails
