import { nav } from './Header.module.scss'

export const Header = () => {
	return (
		<header>
			<nav className={nav}>
				<h1>
					<span>Marvel </span>
					Information Portal
				</h1>
				<ul>
					<li>Characters</li>
					{` / `}
					<li>Comics</li>
				</ul>
			</nav>
		</header>
	)
}
