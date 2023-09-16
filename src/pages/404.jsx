import { Link, useNavigate } from 'react-router-dom';
import { ErrorRandomChar } from '../components/errors/errorRandomChar/ErrorRandomChar';

const Page404 = () => {
  const styles = {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1.5rem',
  };

  const navigate = useNavigate();
  console.log(navigate(1));

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '.725em',
        }}
      >
        <ErrorRandomChar />
      </div>
      <p style={styles}>This page isn&apos;t existing yet</p>
      <Link
        style={{
          ...styles,
          display: 'block',
          padding: '1em',
          color: '#9f0013',
          fontSize: '2rem',
          textDecoration: 'underline',
        }}
        to='/'
      >
        Back to main page
      </Link>

      <Link
        style={{
          ...styles,
          display: 'block',
          padding: '1em',
          fontSize: '1.450rem',
        }}
        to={navigate('/comics')}
      >
        {' '}
        Back to previous page
      </Link>
    </div>
  );
};

export default Page404;
