const { ethers, upgrades} = require('hardhat');

async function main(){
    const Storage = await ethers.getContractFactory('Storage');
    console.log('Storage contract being Deployed!');
    const store = await upgrades.deployProxy(Storage, ["Default"],   { initializer: 'setQuote' });
    await store.deployed();
    console.log("Contract address:", store.address);
}

main();