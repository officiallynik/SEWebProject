import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { connect } from 'react-redux';
import { useState } from 'react';
import Sample from '../components/sample_button';
import { incClicks } from '../store/actions/sampleAction';

interface props {
	clicks: number,
	incClick: Function
}

const Home = (props: props) => {

	const [loginopen, setLoginOpen] = useState(false);
	const handleLoginOpen = () => {
		setLoginOpen(true);
	}
	const handleLoginClose = () => {
		setLoginOpen(false);
	}

	const [signupopen, setSignupOpen] = useState(false);
	const handleSignupOpen = () => {
		setSignupOpen(true);
	}
	const handleSignupClose = () => {
		setSignupOpen(false);
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>SE Web App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to <span className={styles.brand}>SE Web App</span>
				</h1>

				<div className={styles.grid}>
					<a href="#" onClick={handleSignupOpen} className={styles.card}>
						<h3>Register &rarr;</h3>
						<p>Register to use SE Web App!</p>
					</a>

					<a href="#" onClick={handleLoginOpen} className={styles.card}>
						<h3>Login &rarr;</h3>
						<p>Already signed up, login to continue</p>
					</a>

					<a
						href="#"
						className={styles.card}
					>
						<h3>Showcase &rarr;</h3>
						<p>Checkout startups using SE Web App</p>
					</a>

					<a
						href="#"
						className={styles.card}
					>
						<h3>About Us &rarr;</h3>
						<p>
							Checkout the team and goals behind SE Web App
            			</p>
					</a>

					<div className={styles.card}>
						<h3>Clicks: {props.clicks}</h3>
						<p>
							Redux state management example
            			</p>
						<Sample
							onClick={props.incClick}
						/>
					</div>

				</div>
			</main>
		</div>
	)
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