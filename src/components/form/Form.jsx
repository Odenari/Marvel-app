import s from './Form.module.scss';
import MainButton from '../UI/my-buttons/MainButton';

const Form = () => {
	return (
		<form className={s}>
			<div>
				<label htmlFor='hero-name'>Or find a character by name:</label>
				<input type='text' placeholder='Enter name' htmlFor='hero-name' />
			</div>
			<MainButton width='105px'>FIND</MainButton>
		</form>
	);
};

export default Form;
