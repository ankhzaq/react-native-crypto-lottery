import React from 'react';
import { ArrowPathIcon, ArrowUturnDownIcon, CurrencyDollarIcon, StarIcon } from '@heroicons/react/20/solid';
import { useContract, useContractRead } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import { currency } from '../constants';

const AdminControls = () => {

  const { contract, isLoading } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );

  const { data: totalCommission } = useContractRead(
    contract,
    "operatorTotalCommission"
  );

  return (
    <div className="text-white text-center px-5 py-3 rounded-md border-emerald-300/20 border">
      <h2 className="font-bold">Admin Controls</h2>
      <p>
        Total Commission to be withdrawn: ...
        {totalCommission && (
          ethers.utils.formatEther(totalCommission?.toString())
        )}
        {" "}
        {currency}
      </p>

      <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
        <button className="admin-button">
          <StarIcon className="h-6 mx-auto mb-2" />
          Draw Winner
        </button>
        <button className="admin-button">
          <CurrencyDollarIcon className="h6- mx-auto mb-2" />
          Withdraw Commission
        </button>
        <button className="admin-button">
          <ArrowPathIcon className="h6- mx-auto mb-2" />
          Restart Draw
        </button>
        <button className="admin-button">
          <ArrowUturnDownIcon className="h6- mx-auto mb-2" />
          Refund All
        </button>
      </div>
    </div>
  );
}
export default AdminControls;
