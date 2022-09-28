import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Login from '../components/Login';
import { useAddress } from '@thirdweb-dev/react';

const Home: NextPage = () => {
  const address = useAddress();

  if (!address) return (<Login />);

  return (
    <div className="bg-[#091B18] min-h-screen flex flex-col">
      <Head>
        <title>Zaquiel Draw</title>
      </Head>
      <Header />
      <h1>Lets build an awesome Lottery WEB3 Dapp!</h1>
    </div>
  )
}

export default Home
