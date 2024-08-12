import React, { useMemo } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
	ConnectionProvider,
	WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
	PhantomWalletAdapter,
	SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css";

import {
  Profile,
  Test,
  Dashboard,
  Projects,
  Marketplace,
  Energy,
	Faucet,
	Exchange,
	ConnectWallet
} from './pages';

const App = () => {
	const network = WalletAdapterNetwork.Devnet;
	const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(() => [new PhantomWalletAdapter(), new SolflareWalletAdapter()], [network]);

  return (
    <BrowserRouter>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <Routes>
            <Route exact path="/" element={<Navigate to="dashboard" />}>
			</Route>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="projects/:mintAddress?" element={<Projects />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/energy" element={<Energy/>}/>
			<Route path="/faucet" element={<Faucet/>} />
			<Route path='/exchange' element={<Exchange/>}/>
            <Route path="/test" element={<Test />} />
			<Route path="/connect-wallet" element={<ConnectWallet />} />
          </Routes>
        </WalletProvider>
      </ConnectionProvider>
    </BrowserRouter>
  );
};

export default App;
