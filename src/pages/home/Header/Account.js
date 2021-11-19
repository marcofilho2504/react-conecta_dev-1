import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import { useNavigate } from 'react-router-dom';
import React, { useState, useRef } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { useSelector, useDispatch } from "react-redux";
import { siginOut } from '../../../actions/accountActions';

function Account() {
    const account = useSelector((state) => state.account);
    const [isOpen, setOpen] = useState(false);
    const ref = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isAuthenticated = !!account.user;

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(true);
    }

    const handleSiginOut = () => {
        handleClose();
        dispatch(siginOut());
        navigate('/');
    }

    const handleOpen2 = () => {
        navigate('/sigin');
    }


    return (
        <>
            <Avatar ref = {ref} onClick = {handleOpen} alt="Remy Sharp" src = {account.user && account.user.Avatar} />

            {/* {
                isAuthenticated
                ? (<Menu anchorEl = {ref.current} anchorOrigin = {{vertical: 'bottom', horizontal: 'center'}} open = {{isOpen}} onClose = {{handleClose}} getContentAnchorEl = {null}>
                    <MenuItem> Perfil </MenuItem>
                    <MenuItem> Meus Posts </MenuItem>
                    <MenuItem> Minhas Conexões </MenuItem>
                    <MenuItem onClick = {handleSiginOut}> Sair </MenuItem>
                </Menu>)
                : (<Menu anchorEl = {ref.current} anchorOrigin = {{vertical: 'bottom', horizontal: 'center'}} open = {{isOpen}} onClose = {{handleClose}} getContentAnchorEl = {null}>
                    <MenuItem> Registrar Gratis!! </MenuItem>
                    <MenuItem onClick = {handleOpen2}> Entrar </MenuItem>
                </Menu>)
            } */}

        </>
    )
}

export default Account;