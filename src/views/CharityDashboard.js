import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { CharityContext } from '../contexts/CharityContext';
import { useContext } from 'react';
import CauseBoxes from '../components/CauseBoxes';
import metamask from '../assets/metamask.png';
import TransactionFields from '../components/TransactionFields';



export default function CharityDashboard() {

  const [account, setAccount] = useState(null);
  const { charity } = useContext(CharityContext);
  const [charityInfo, setCharityInfo] = useState({});
  const [charityTransactions, setCharityTransactions] = useState({})
  const [charityCauses, setCharityCauses] = useState({})
  const [totalDonated, setTotalDonated] = useState({})



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


  const fetchCharData = async () => {
    try {
      const response = await fetch(`http://172.20.10.2:8000/charity_info/get_char_metadata?charity_name=${charity.title}`, {
        method: "GET",
        headers: {'Content-Type': 'application/json'},
      });
      const data = await response.json();
      setCharityInfo(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchCharTransactions = async ()=> {
    try {
      const response = await fetch(`http://172.20.10.2:8000/charity_info/get_charity_transactions?charity_name=${charity.title}`, {
        method: "GET",
        headers: {'Content-Type': 'application/json'},
      });
      const data = await response.json();
      setCharityTransactions(data);
      console.log(charityTransactions)


    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const fetchCharCauses = async ()=> {
    try {
      const response = await fetch(`http://172.20.10.2:8000/charity_info/get_causes?charity_name=${charity.title}`, {
        method: "GET",
        headers: {'Content-Type': 'application/json'},
      });
      const data = await response.json();
      setCharityCauses(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const fetchTotalDonators = async ()=> {
    try {
      const response = await fetch(`http://172.20.10.2:8000/charity_info/get_charity_total?charity_name=${charity.title}`, {
        method: "GET",
        headers: {'Content-Type': 'application/json'},
      });
      const data = await response.json();
      setTotalDonated(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const fetchCauseName = async (id) => {
    try {
      const response = await fetch(`http://172.20.10.2:8000/charity_info/pull_cause?cause_id=${id}`, {
        method: "GET",
        headers: {'Content-Type': 'application/json'},
      });
      const data = await response.json();
      return data.cause.name;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchCharData();
    fetchCharTransactions();
    fetchCharCauses();
    fetchTotalDonators();
  }, [charity]); 
  return (
    <div className="container mx-auto px-4 py-8">
      
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold leading-7 text-gray-900">{charityInfo.info?.username?.replace(/_/g, ' ')}</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md sm:col-span-2 lg:col-span-3 mb-6">
        <h4 className="text-lg font-medium leading-6 text-gray-900">About</h4>
        <p className="mt-1 text-sm leading-6 text-gray-700">
          {charityInfo.info?.text_desc}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img className="w-full h-full object-cover" alt="Charity" src={charityInfo.info?.img_link || 'placeholder.png'} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md col-span-2">          
        <h3 className="text-lg font-medium leading-6 text-gray-900">Causes</h3>
          <div className="flex overflow-hidden mt-4">
            {charityCauses.causes?.map((item, index) => (
              <div className="w-full sm:w-1/2 md:w-1/2 mb-10 px-2" key={index}>
                <CauseBoxes
                  name={item.name}
                  description={item.description}
                  wallet_addr={item.wallet_addr}
                  id={item.id}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
          <h4 className="text-4xl font-medium leading-6 text-gray-900">Total Donations</h4>
          <p className="mt-5 text-xl leading-6 text-gray-700">{totalDonated?.value} $CHARITY</p>        
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md col-span-2">
          <h4 className="text-lg font-medium leading-6 text-gray-900">Transactions</h4>
          <div className="flex flex-wrap">
            {charityTransactions.transactions?.map((item, index) => (
              <div className="w-full sm:w-1/2 md:w-1/2 mb-10 px-2" key={index}>
                <TransactionFields
                  amount={item.amount}
                  date={item.create_date}
                  cause={item.cause}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="bg-pink-logo-hover p-6 rounded-lg shadow-md items-center">
          <button onClick={connect} className="text-sm text-gray-500 uppercase font-semibold dark:text-gray-400 hover:underline flex justify-between items-center">
            Connect MetaMask
            <img src={metamask} alt="Metamask Logo" className="w-10 h-10 ml-2" />
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
