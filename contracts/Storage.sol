//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import "./EIPMeta.sol";

contract Storage is EIPMeta{
    
    bytes32 store;
    function StoreEIP() public returns (bytes32){
        store = EIPMeta.MetaEIP("Test","1");
        return store;
    }
    string public quote;
    address public owner;

    function setQuote(string memory newQuote) public {
        quote = newQuote;
        owner = msgSender();
    }

    function getQuote() view public returns(string memory currentQuote, address currentOwner) {
        currentQuote = quote;
        currentOwner = owner;
    }



}