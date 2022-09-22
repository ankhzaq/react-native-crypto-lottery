import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Zaquiel Draw</title>
      </Head>

      <h1>Lets build an awesome Lottery WEB3 Dapp!</h1>
    </div>
  )
}

export default Home
