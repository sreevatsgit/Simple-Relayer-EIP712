let config = {};
config.contract = {
    address: "0xc0e98792174e041f24C48770F36DdC41f8d6F5f2",
    abi: [
      
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "userAddress",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address payable",
              "name": "relayerAddress",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "bytes",
              "name": "functionSignature",
              "type": "bytes"
            }
          ],
          "name": "MetaTransactionExecuted",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "string",
              "name": "value",
              "type": "string"
            }
          ],
          "name": "ValueChanged",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "userAddress",
              "type": "address"
            },
            {
              "internalType": "bytes",
              "name": "functionSignature",
              "type": "bytes"
            },
            {
              "internalType": "bytes32",
              "name": "sigR",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "sigS",
              "type": "bytes32"
            },
            {
              "internalType": "uint8",
              "name": "sigV",
              "type": "uint8"
            }
          ],
          "name": "executeMetaTransaction",
          "outputs": [
            {
              "internalType": "bytes",
              "name": "",
              "type": "bytes"
            }
          ],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getChainID",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getMessage",
          "outputs": [
            {
              "internalType": "string",
              "name": "current_message",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "currentOwner",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            }
          ],
          "name": "getNonce",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "nonce",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "message",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "new_message",
              "type": "string"
            }
          ],
          "name": "setMessage",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "nonce",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "chainID",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "functionSignature",
              "type": "bytes"
            },
            {
              "internalType": "bytes32",
              "name": "sigR",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "sigS",
              "type": "bytes32"
            },
            {
              "internalType": "uint8",
              "name": "sigV",
              "type": "uint8"
            }
          ],
          "name": "verify",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      
      ]
}


module.exports = {config}