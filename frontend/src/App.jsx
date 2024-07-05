import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import '@solana/wallet-adapter-react-ui/styles.css';

import {
  Homepage,
  IndiProject,
  Profile,
  Test,
  Dashboard,
  AllProjects,
  Marketplace,
  ListEnergy,
} from './pages';

const App = () => {
  // Define network, endpoint, and wallets
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = clusterApiUrl(network);
  const wallets = [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter(),
  ];

  return (
    <BrowserRouter>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/individualproject" element={<IndiProject />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/test" element={<Test />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/allprojects" element={<AllProjects/>}/>
            <Route path="/listenergy" element={<ListEnergy/>}/>
          </Routes>
        </WalletProvider>
      </ConnectionProvider>
    </BrowserRouter>
  );
};

export default App;
