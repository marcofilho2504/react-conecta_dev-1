import React, { useState } from 'react';
import { useSelector } from "react-redux";
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function Account() {
    const account = useSelector((state) => state.account);
    const [isOpen, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(true);
    }


    return (
        <>
            <Avatar onClick = {handleOpen} alt="Remy Sharp" src = {account.user && account.user.Avatar} />

            <Menu anchorEl = {null} anchorOrigin = {{vertical: 'bottom', horizontal: 'center'}} open = {{isOpen}} onClose = {{handleClose}} >
                <MenuItem> Sair </MenuItem>
            </Menu>
        </>
    )
}

export default Account;