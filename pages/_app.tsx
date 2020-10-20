import { Provider } from 'react-redux';
import { useStore } from '../store';

import { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store} >
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
