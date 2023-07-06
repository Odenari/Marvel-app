import { btn } from './Button.module.scss'

const MainButton = ({ width = '100px', color = '#9f0013', children }) => {
	return (
		<button
			style={{
				width: width,
				backgroundColor: color,
			}}
			className={btn}
		>
			{children}
		</button>
	)
}

export default MainButton
