import React, { useEffect, useCallback } from 'react';
import authService from '../../services/authService';
import { setUserData } from '../../actions/accountActions';
import { useDispatch } from 'react-redux';
 


function Auth({ children }) {
    const dispatch = useDispatch();
    
    const initAuth = useCallback(async () => {
        if (authService.isAuthenticated()) {
            // RECUPERAR NOVAMENTE OS DADOS DO USUARIO LOGADO 
            await dispatch(setUserData());
        }
    }, [dispatch])

    useEffect(() => {
        initAuth();
    }, [])

    return children;
}

export default Auth;