const CauseBoxes = (props) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white flex flex-col h-full">
        <div className="px-6 py-4 flex flex-col justify-between flex-grow">
            <div className="font-bold text-xl mb-2">{props.name}</div>
            <div className="text-gray-700 text-base">Wallet Address: {props.wallet_addr}</div>
            <div className="text-gray-700 text-base">Recipient Cause-ID: {props.id}</div>
            <p className="text-gray-700 text-base mt-3 overflow-hidden overflow-ellipsis line-clamp-3">{props.description}</p>
        </div>
    </div>
  );
};

export default CauseBoxes;
