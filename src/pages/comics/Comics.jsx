import './Comics.scss'

import Banner from '../../components/banner/Banner'
import ComicsCard from '../../components/comics-card/ComicsCard'
import ComicsInfo from './comicsInfo/ComicsInfo'

const Comics = () => {
	return (
		<>
			<div className='container'>
				<Banner />
				<div className='comicsContainer'>
					<ComicsCard />
					<ComicsCard />
					<ComicsCard />
					<ComicsCard />
				</div>
				<ComicsInfo />
			</div>
		</>
	)
}

export default Comics
