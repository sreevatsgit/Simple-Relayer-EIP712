# Simple Relayer Project

## Author: Sreevatsan Komandur Sridhar

This project demonstrates a Simple Relayer using Hardhat, upgradable contracts by openzeppelin and NextJS. The relayer uses 4 contracts namely: EIPBaseContract.sol, EIPMeta.sol, SafeMath.sol (Solidity version 0.8.0) and Storage.sol that were created using Hardhat and were deployed to the Rinkeby test network.

You can deploy these contracts too by following the following steps:
1) Go to  ```config.js``` and paste your secret key after the 0x in accounts (secret key found in metamask).
2) Run:
```
npx hardhat run scripts/deploy.js --network rinkeby
```
The shell terminal would print the given contract address. (Save it!)

To run the app:

```
cd my-app
```
The app was built using NextJS

```
yarn dev
```

If you are deploying your own contract, then edit the config,js by :
```
address: "0x30ba9FaD17844e51a2916CffDdF71C029adAaAb7", //enter your contract address that you saved!
    abi: <> // copy the abi at artifacts> contracts>Storage.sol>Storage.json
```

# References:

Bloemen, Remco, Lenoid Logvinov, and Jacob Evans. n.d. "EIP-712: Ethereum typed structured data hashing and signing."  Ethereum Improvement Proposals. https://eips.ethereum.org/EIPS/eip-712#rationale-for-typehash

Jie, Wei Koh. 2018. "EIP712 is here: What to expect and how to use it." Medium. https://medium.com/metamask/eip712-is-coming-what-to-expect-and-how-to-use-it-bb92fd1a7a26
