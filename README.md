# Simple Relayer Project

## Author: Sreevatsan Komandur Sridhar

This project demonstrates a Simple Relayer using Hardhat, upgradable contracts by openzeppelin and NextJS. The relayer uses 4 contracts namely: EIPBaseContract.sol, EIPMeta.sol, SafeMath.sol (Solidity version 0.8.0) and Storage.sol that were created using Hardhat and were deployed to the Rinkeby test network.

You can deploy these contracts too by running:
```
npx hardhat run scripts/deploy.js --network rinkeby
```
The shell terminal would print the given contract address. (Save it!)

To run the app:

```
cd my-app
```
The app was built using NextJS and materialUI

```
yarn dev
```
