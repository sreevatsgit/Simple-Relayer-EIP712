import { Button } from '@mui/material';

const StoreButton = () =>{
    
    const handleButtonClick = ({val}) => {

        alert(`HANDLE ${val}`);
    };
    return <Button variant='contained' onClick={handleButtonClick}>Store Value</Button>
};

export default StoreButton;