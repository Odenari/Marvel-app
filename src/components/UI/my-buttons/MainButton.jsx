import { btn } from './Button.module.scss';

const MainButton = ({
	width = '100px',
	color = '#9f0013',
	children,
	handleGetHero,
	handleMoreHeroes,
}) => {
	return (
		<button
			style={{
				width: width,
				backgroundColor: color,
			}}
			className={btn}
			onClick={
				handleGetHero
					? () => handleGetHero()
					: handleMoreHeroes
					? () => handleMoreHeroes()
					: null
			}
		>
			{children}
		</button>
	);
};

export default MainButton;
