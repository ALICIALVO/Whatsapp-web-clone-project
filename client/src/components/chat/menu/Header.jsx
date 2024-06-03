import { useContext, useState } from "react";


import {Box, styled} from '@mui/material';
import { Chat as MessageIcon } from '@mui/icons-material';



import { AccountContext } from "../../../context/AccountProvider";

//components:
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../drawer/infoDrawer';

const Component = styled(Box)`
    display: flex;
    align-items: center;
    height: 3rem;
    background: #f0f2f5;
    padding: 0.8rem 1.6rem;
`;

const Wrapper = styled(Box)`
    margin-left: auto;
    & > * {
        margin-left: 0.2rem;
        color: #363535d1;

    };
    & :first-of-type {
        font-size: 2.2rem;
        margin-right: 0.8rem;
        margin-top: 0.3rem;
    }
`;

const Image = styled('img')({
    height: 40,
    width:40,
    borderRadius:'50%',
})

const Header = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const {account} = useContext(AccountContext);

    const toggleDrawer = () => {
        setOpenDrawer(true);
    };
    console.log('Account:', account); // Debug log for account object


    return(
        <>
        <Component>
        <Image src={account?.picture} alt="dp" 
        onClick={toggleDrawer}/>
        <Wrapper>
            <MessageIcon />
            <HeaderMenu setOpenDrawer={setOpenDrawer}/>
        </Wrapper>
        </Component>
        <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}/>
        </>
    );
}

export default Header;