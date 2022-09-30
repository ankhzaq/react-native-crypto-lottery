import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Login from '../components/Login';
import PropagateLoader from 'react-spinners/PropagateLoader';
import { useAddress, useContract } from '@thirdweb-dev/react';
import Loading from '../components/Loading';

const Home: NextPage = () => {
  const address = useAddress();
  const { contract, isLoading } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );

  if (isLoading) {
    return (
      <Loading loading={isLoading} />
    );
  }

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
