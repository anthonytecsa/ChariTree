const TransactionFields = (props) => {
    return (
        <div class="bg-white rounded-lg shadow divide-y divide-gray-200 max-w-sm">
            <div class="px-6 py-4">
                <div class="flex justify-between">
                <span class="font-semibold text-lg">{props.amount} $CHARITY</span>
                <span class="text-gray-500 text-xs">{props.date}</span>
                </div>
                <p class="text-gray-700">Recipient Cause-ID: {props.cause}</p>
            </div>
        </div>
    );
  };
  
  export default TransactionFields;
  