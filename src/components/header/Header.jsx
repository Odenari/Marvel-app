import { nav, activeLink } from './Header.module.scss';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
export const Header = () => {
  const location = useLocation();

  const getCurrentPath = ({ pathname }) => {
    if (pathname === '/') return pathname;
    return pathname.replace('/', '');
  };
  const path = getCurrentPath(location);

  return (
    <header>
      <nav className={nav}>
        <Link to='/'>
          <h1>
            <span className={path === '/' ? activeLink : null}>Marvel </span>
            Information Portal
          </h1>
        </Link>
        <ul>
          <Link to='/'>
            <li className={path === '/' ? activeLink : null}>Characters</li>
          </Link>
          {` / `}
          <Link to='/comics'>
            <li className={path === 'comics' ? activeLink : null}>Comics</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
