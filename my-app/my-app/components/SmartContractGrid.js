const { config } = require("./config");
import { Grid, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import StoreButton from './StoreButton';
import  Web3  from 'web3';

let web3; 
let contract;
const SmartContractGrid = () =>{
  const [message, setMessage] = useState("This is a default Message");
  const [owner, setOwner] = useState("Default Owner Address");
  const [newMessage, setNewMessage] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");
  const [metaTxEnabled, setMetaTxEnabled] = useState(true);
  const {account, library } = useWeb3React();

useEffect(() => {
  async function init(){
    const provider = window["ethereum"];
    await provider.enable();
    web3 = new Web3(provider);
  //TODO: init smart contract
    contract =  new web3.eth.Contract(
    config.contract.abi,
    config.contract.address
  );

  console.log(contract);
    
  //TODO: retrieve.call()
  contract.methods.setMessage(newMessage);
  };

  init();
    }, []);
    const onMessageChange = event => {
      setNewMessage(event.target.value);
    };
    const onSubmit = async event => {
      if (newMessage != "" && contract) {
        if (metaTxEnabled) {
          console.log("Sending meta transaction");
          let userAddress = selectedAddress;
          let nonce = await contract.methods.getNonce(userAddress).call();
          let functionSignature = contract.methods.setMessage(newMessage).encodeABI();
          let message = {};
          message.nonce = parseInt(nonce);
          message.from = userAddress;
          message.functionSignature = functionSignature;
  
          const dataToSign = JSON.stringify({
            types: {
              EIP712Domain: domainType,
              MetaTransaction: metaTransactionType
            },
            domain: domainData,
            primaryType: "MetaTransaction",
            message: message
          });
          console.log(domainData);
          console.log();
          web3.currentProvider.send(
            {
              jsonrpc: "2.0",
              id: 999999999999,
              method: "eth_signTypedData_v4",
              params: [userAddress, dataToSign]
            },
            function(error, response) {
              console.info(`User signature is ${response.result}`);
              if (error || (response && response.error)) {
                showErrorMessage("Could not get user signature");
              } else if (response && response.result) {
                let { r, s, v } = getSignatureParameters(response.result);
                console.log(userAddress);
                console.log(JSON.stringify(message));
                console.log(message);
                console.log(getSignatureParameters(response.result));
  
                const recovered = sigUtil.recoverTypedSignature_v4({
                  data: JSON.parse(dataToSign),
                  sig: response.result
                });
                console.log(`Recovered ${recovered}`);
                sendTransaction(userAddress, functionSignature, r, s, v);
              }
            }
          );
        } else {
          console.log("Sending normal transaction");
          contract.methods
            .setMessage(newMessage)
            .send({ from: selectedAddress })
            .on("transactionHash", function(hash) {
              showInfoMessage(`Transaction sent to blockchain with hash ${hash}`);
            })
            .once("confirmation", function(confirmationNumber, receipt) {
              showSuccessMessage("Transaction confirmed");
              getMessageFromNetwork();
            });
        }
      } else {
        showErrorMessage("Message not entered!");
      }
    };
  
    const getSignatureParameters = signature => {
      if (!web3.utils.isHexStrict(signature)) {
        throw new Error(
          'Given value "'.concat(signature, '" is not a valid hex string.')
        );
      }
      var r = signature.slice(0, 66);
      var s = "0x".concat(signature.slice(66, 130));
      var v = "0x".concat(signature.slice(130, 132));
      v = web3.utils.hexToNumber(v);
      if (![27, 28].includes(v)) v += 27;
      return {
        r: r,
        s: s,
        v: v
      };
    };
  
    const getMessageFromNetwork = () => {
      if (web3 && contract) {
        contract.methods
          .getMessage()
          .call()
          .then(function(result) {
            console.log(result);
            if (
              result &&
              result.currentMessage != undefined &&
              result.currentOwner != undefined
            ) {
              if (result.currentMessage == "") {
                showErrorMessage("No meesage set on blockchain yet");
              } else {
                setMessage(result.currentMessage);
                setOwner(result.currentOwner);
              }
            } else {
              showErrorMessage("Not able to get message information from Network");
            }
          });
      }
    };
  
    const showErrorMessage = message => {
      NotificationManager.error(message, "Error", 5000);
    };
  
    const showSuccessMessage = message => {
      NotificationManager.success(message, "Message", 3000);
    };
  
    const showInfoMessage = message => {
      NotificationManager.info(message, "Info", 3000);
    };
  
    const sendTransaction = async (userAddress, functionData, r, s, v) => {
      if (web3 && contract) {
        try {
          let gasLimit = await contract.methods
            .executeMetaTransaction(userAddress, functionData, r, s, v)
            .estimateGas({ from: userAddress });
          let gasPrice = await web3.eth.getGasPrice();
          console.log(gasLimit);
          console.log(gasPrice);
          let tx = contract.methods
            .executeMetaTransaction(userAddress, functionData, r, s, v)
            .send({
              from: userAddress,
              gasPrice: web3.utils.toHex(gasPrice),
              gasLimit: web3.utils.toHex(gasLimit)
            });
  
          tx.on("transactionHash", function(hash) {
            console.log(`Transaction hash is ${hash}`);
            showInfoMessage(`Transaction sent by relayer with hash ${hash}`);
          }).once("confirmation", function(confirmationNumber, receipt) {
            console.log(receipt);
            showSuccessMessage("Transaction confirmed on chain");
            getMessageFromNetwork();
          });
        } catch (error) {
          console.log(error);
        }
      }
    };

  return(  
        <Grid container justifyContent="center" alignItems = "center">
        <Grid item xs={2}>
            <TextField  placeholder="Enter message"
              onChange={onMessageChange}
              value={newMessage}/>
        </Grid>
        <Grid item xs={2}>
            <StoreButton/>
        </Grid>
        </Grid>
  );

};

export default SmartContractGrid;