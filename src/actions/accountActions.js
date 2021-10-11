
const sigin = (email, password) => {
    return (dispatch) => {
        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: {
              user: {  
                id: 1,
                name: 'Marco Aurélio',
                username: 'MarcoAurélio',
                email: 'marcoaurelio.filho25@gmail.com'
              }
            }
        })
    }
}