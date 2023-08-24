import s from './Form.module.scss';
import MainButton from '../UI/my-buttons/MainButton';

// eslint-disable-next-line react/display-name
const Form = () => {
	return (
		<form className={s}>
			<div style={{ marginRight: '12px' }}>
				<label htmlFor='hero-name'>Or find a character by name:</label>
				<input type='text' placeholder='Enter name' htmlFor='hero-name' />
			</div>
			<MainButton width='105px'>FIND</MainButton>
		</form>
	);
};
export default Form;
