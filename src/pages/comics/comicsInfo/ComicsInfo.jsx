import s from './ComicsInfo.module.scss'
const ComicsInfo = () => {
	return (
		<div className={s.comicsInfo}>
			<img
				width={293}
				height={450}
				src='/src/Assets/Comics/x-men.png'
				alt='X-men vol.5'
			/>
			<div className={s.descrWrapper}>
				<h3 className={s.title}>X-Men: Days of Future Pasts</h3>
				<p className={s.descr}>
					Re-live the legendary first journey into the dystopian future of 2013
					- where Sentinels stalk the Earth, and the X-Men are humanity{`'`}s
					only hope...until they die! Also featuring the first appearance of
					Alpha Flight, the return of the Wendigo, the history of the X-Men from
					Cyclops himself...and a demon for Christmas!?
				</p>
				<div className='totalPages'>{144} pages</div>
				<div className='langs'>Language: {'en-us'}</div>
				<b className={s.price}>9.99$</b>
			</div>
			<a href='#' className={s.back}>
				Back to all
			</a>
		</div>
	)
}

export default ComicsInfo
