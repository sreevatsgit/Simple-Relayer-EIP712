import { Typography } from "@mui/material";
import { useWeb3React } from "@web3-react/core";


const WalletAddress = () => {
    const {account} = useWeb3React();
    return <Typography>{account}</Typography>;
    
};

export default WalletAddress;
