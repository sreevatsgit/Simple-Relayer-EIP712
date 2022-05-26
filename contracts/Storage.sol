//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import "./EIP712Meta.sol";

contract Storage is EIP712MetaTransaction{
    string public message;
    address public owner;
event ValueChanged(string value);
    function setMessage(string memory new_message) public {
        message= new_message;
        owner = msgSender();
        emit ValueChanged(new_message);
        
    }

    function getMessage() public view returns (string memory current_message, address currentOwner)
    {
        current_message = message;
        currentOwner = owner;
    }
}