import Head from 'next/head';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { incClicks } from '../store/actions/sampleAction';
import LanderPage from '../components/lander';
import CustomLinearProgress from '../components/linearprogress';

const Home = (props) => {

	const [isDone, setIsDone] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsDone(true);
		}, 500);
	}, [])

	return (
		<div style={{width: "100%", height: "calc(100vh - 45px)", overflow: "auto"}}>
			{
				isDone? <LanderPage />: <CustomLinearProgress />
			}
		</div>
	);
}


const mapStateToProps = ({ sampleReducer }) => {
	return {
		clicks: sampleReducer.clicks
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		incClick: () => dispatch(incClicks())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);