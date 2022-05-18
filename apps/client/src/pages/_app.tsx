import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { store } from '@redux/store';
import { Provider } from 'react-redux';
import { ReactFlowProvider } from 'react-flow-renderer';
import Curtain from '@src/components/Curtain/Curtain';
import Apollo from '@src/graphql/apollo-client';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Apollo>
      <Provider store={store}>
        <ReactFlowProvider>
          <Component {...pageProps} />
          <Curtain />
        </ReactFlowProvider>
      </Provider>
    </Apollo>
  );
}

export default MyApp;
