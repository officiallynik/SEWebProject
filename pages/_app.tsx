import { Provider } from 'react-redux';
import { useStore } from '../store';

import { AppProps } from 'next/app';
import '../styles/globals.css';
import NavBar from '../components/navbar';

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store} >
      <NavBar >
        <Component {...pageProps} />
      </NavBar>
    </Provider>
  );
}

export default MyApp
