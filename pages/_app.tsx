import { Provider } from 'react-redux';
import { useStore } from '../store';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import NavBar from '../components/navbar';
import ChatWithExperts from '../components/chat_with_experts';
import Notify from '../components/notifications';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
	const store = useStore(pageProps.initialReduxState);

	return (
		<Provider store={store} >
			<Head>
				<title>Kisan Seva </title>
				<link rel="icon" href="/farmer.png" />
			</Head>
			<NavBar />
			<Component {...pageProps} />
			<Notify />
		</Provider>
	);
}


export default (MyApp);
