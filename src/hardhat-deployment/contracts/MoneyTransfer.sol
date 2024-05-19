// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract MoneyTransfer {
    address public sender;

    function recieve() external payable {
        sender = msg.sender;
    }

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
    
    function pay(address payable recipient) public payable {
        (bool sent, bytes memory data) = recipient.call{value: getBalance()}("");
        require(sent, "Error sending payment");
    }
}