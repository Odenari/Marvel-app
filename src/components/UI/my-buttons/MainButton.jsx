import { btn } from './Button.module.scss';

const MainButton = ({
	width = '100px',
	color = '#9f0013',
	children,
	handleGetHero,
}) => {
	return (
		<button
			style={{
				width: width,
				backgroundColor: color,
			}}
			className={btn}
			onClick={() => handleGetHero()}
		>
			{children}
		</button>
	);
};

export default MainButton;
