import { Web3ReactProvider } from '@web3-react/core';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { getLibrary } from './utils/web3';

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Header />
      <Main />
    </Web3ReactProvider>
  );
}

export default App;
