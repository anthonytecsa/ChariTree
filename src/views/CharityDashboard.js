import React, { useState } from 'react';
import { ethers } from 'ethers';
import { CharityContext } from '../contexts/CharityContext';
import { useContext } from 'react';

export default function CharityDashboard() {
  const [account, setAccount] = useState(null);

  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        setAccount(accounts[0]);
        console.log(accounts);
      } catch (error) {
        console.error("Error connecting to MetaMask", error);
      }
    } else {
      console.log('MetaMask is not installed');
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold leading-7 text-gray-900">Charity Name</h3>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md sm:col-span-2 lg:col-span-3 mb-6">
        <h4 className="text-lg font-medium leading-6 text-gray-900">About</h4>
        <p className="mt-1 text-sm leading-6 text-gray-700">
          Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
          qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
          pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-medium leading-6 text-gray-900">Full name</h4>
          <p className="mt-1 text-sm leading-6 text-gray-700">Margot Foster</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-medium leading-6 text-gray-900">Application for</h4>
          <p className="mt-1 text-sm leading-6 text-gray-700">Backend Developer</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-medium leading-6 text-gray-900">Email address</h4>
          <p className="mt-1 text-sm leading-6 text-gray-700">margotfoster@example.com</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-medium leading-6 text-gray-900">Salary expectation</h4>
          <p className="mt-1 text-sm leading-6 text-gray-700">$120,000</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <button onClick={connect} className="text-sm text-gray-500 uppercase font-semibold dark:text-gray-400 hover:underline">
            Connect MetaMask
          </button>
          {account && (
            <p className="mt-2 text-sm text-gray-700">
              Connected account: {account}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
