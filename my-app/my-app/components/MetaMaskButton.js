import { Button } from "@mui/material";
import { useWeb3React } from "@web3-react/core";   
import { InjectedConnector } from "@web3-react/injected-connector";
const injected = new InjectedConnector({supportedChainIds:[4]}); 
const MetamaskButton = () =>{
    const {active, activate, deactivate} = useWeb3React();

    const handleButtonClick = () => {
        if (active){
            deactivate();
        }
        else{
        activate(injected);
        }
    };
    return <Button variant='contained' color={active ? "error": "primary"} onClick={handleButtonClick}>
        {active ? "Disconnect Wallet":"Connect Wallet"}
        </Button>;
}

export default MetamaskButton;