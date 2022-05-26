import '../styles/globals.css'
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider} from '@ethersproject/providers'
function MyApp({ Component, pageProps }) {
  const getLibrary = (provider, connector) => {
    return new Web3Provider(provider)
  }
  return <Web3ReactProvider getLibrary={getLibrary}><Component {...pageProps} /></Web3ReactProvider>
}

export default MyApp
