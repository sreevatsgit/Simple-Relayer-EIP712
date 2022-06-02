//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract EIPBaseContract {

// Defining a domain sep (https://eips.ethereum.org/EIPS/eip-712#definition-of-domainseparator)

    struct EIP712Domain {
        string name;
        string version;
        address verifyingContract;
        bytes32 salt;
    }
    
// Typehash [click link here] (https://eips.ethereum.org/EIPS/eip-712#rationale-for-typehash)
    bytes32 internal constant EIP712_DOMAIN_TYPEHASH = keccak256(bytes("EIP712Domain(string name,string version,address verifyingContract,bytes32 salt)"));

    bytes32 internal domainSeparator;
    bool private initialized;

//defining a domain seperator     
     function initialize( string memory name, string memory version) public returns(bytes32) {
        
         domainSeparator = keccak256(abi.encode(
            EIP712_DOMAIN_TYPEHASH,
            keccak256(bytes(name)),
            keccak256(bytes(version)),
            address(this),
            bytes32(getChainID())
         ));
         return domainSeparator;
    }
     function getChainID() internal view returns (uint256 id) {
        assembly {
            id := chainid()
        }
    }

    function getDomainSeparator() private view returns(bytes32) {
        return domainSeparator;
    }
    function toTypedMessageHash(bytes32 messageHash) internal view returns(bytes32) {
        return keccak256(abi.encodePacked("\x19\x01", getDomainSeparator(), messageHash));
    }

}
