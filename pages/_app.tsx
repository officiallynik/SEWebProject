import { Provider } from 'react-redux';
import { useStore } from '../store';

import { AppProps } from 'next/app';
import '../styles/globals.css';
import NavBar from '../components/navbar';
import ChatWithExperts from '../components/chat_with_experts';
import Notify from '../components/notifications';

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store} >
      <NavBar />
      <Component {...pageProps} />
      <ChatWithExperts />
      <Notify msg="Notification snackbar" type="default" />
    </Provider>
  );
}

export default MyApp
