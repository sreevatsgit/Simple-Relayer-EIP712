import { Grid } from '@mui/material';

import MetamaskButton from './MetaMaskButton';
import WalletAddress from './WalletAddress';

const ConnectWalletGrid = () =>{
    return(
    <Grid container justifyContent="center" alignItems = "center">
      <Grid item xs={2}>
        <MetamaskButton/>
      </Grid>
      <Grid item xs={2}>
        <WalletAddress />
      </Grid>
    </Grid>
  );

};

export default ConnectWalletGrid;