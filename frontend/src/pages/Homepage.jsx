import React, { useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
  WalletModalProvider,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import '@solana/wallet-adapter-react-ui/styles.css';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import {
  voltio_logo_white_png,
} from '../assets';
import { IoWallet } from 'react-icons/io5';
import { BackgroundImage } from '../components';

const Homepage = () => {
  const navigate = useNavigate();
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
    ],
    [network]
  );

  useEffect(() => {
    // Check if publicKey exists to determine successful connection
    if (publicKey) {
      console.log(publicKey)
      console.log(connection)
      navigate('/dashboard');
      // window.location.reload();
      // Redirect to dashboard upon successful connection
      
    }
  }, [publicKey, connection]);

  return (
        <WalletModalProvider>
          <BackgroundImage>
            <div className=" md:w-[500px] w-[300px] flex items-center">
              <div className="items-center flex flex-col mt-[162px]">
                <div className="">
                  <img src={voltio_logo_white_png} className="md:w-[500px] w-[400px] fill-white " alt="Voltio Logo" />
                </div>
                <div className="bg-dg rounded-3xl shadow-2xl py-12 mt-4 items-center flex flex-col w-[90%]">
                  <div className="mb-10 mt-6">
                    <div className="md:h-[100px] h-[80px] md:w-[100px] w-[80px] border-4 border-white rounded-full p-4 items-center flex place-content-center">
                      <IoWallet className="text-[50px] text-white" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="text-center hover:scale-110 mb-4">
                      <WalletMultiButton className="custom-wallet-button" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BackgroundImage>
        </WalletModalProvider>
  );
};

export default Homepage;
