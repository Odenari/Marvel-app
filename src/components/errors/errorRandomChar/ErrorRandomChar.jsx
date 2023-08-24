import errorImg from './error.gif';

export const ErrorRandomChar = () => {
	return (
		<img
			style={{
				margin: '0 auto',
				objectFit: 'contain',
			}}
			src={errorImg}
			alt='Unexpected error, please try to refresh the page'
		/>
	);
};
