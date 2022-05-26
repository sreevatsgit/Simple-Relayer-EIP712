let config = {};
config.contract = {
    address: "0xd2Fe96480ca84ca2dA66Ac3346bd79fc4fBCB9f8",
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
            "internalType": "address",
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
            "internalType": "bytes",
            "name": "inBytes",
            "type": "bytes"
          }
        ],
        "name": "convertBytesToBytes4",
        "outputs": [
          {
            "internalType": "bytes4",
            "name": "outBytes4",
            "type": "bytes4"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address payable",
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
            "internalType": "address payable",
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
      }
    ]
  }

module.exports = {config}