import React, { useState } from "react";
import { makeStyles } from '@material-ui/styles';
import Typography  from "@material-ui/core/Typography";
import Grid  from '@material-ui/core/Grid';
import Box  from '@material-ui/core/Box';
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { useNavigate } from "react-router";
import FormHelperText from "@material-ui/core/FormHelperText";
import { sigin } from '../../actions/accountActions';
import { useDispatch } from "react-redux";

const useStyles = makeStyles(( theme ) => ({
     root: {
         height: '100vh',
     },

     image: {
         backgroundImage: 'url(data:image/jpeg;base64,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)',
         backgroundPosition: 'center',
         backgroundSize: 'cover',
         backgroundRepeat: 'none',
         padding: '16',
         textAlign: 'center'
     },
     avatar: {
         background: 'blue',
         marginBottom: '8'
     },
     button: {
         marginTop: '8px'
     },
     form: {
         marginTop: '2px',
         marginLeft: '25px',
         marginRight: '25px'
     }
}));

function Copyright () {
    return (
        <Typography variant = "body2" align = "center">
            <a color = "inherit" href = "https://www.instagram.com/aurelio25m/">
                Marco Aurélio
            </a>{' '}
            {new Date().getFullYear()}
        </Typography>
    )
}

function Sigin() {
    const classes = useStyles();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState("");
    const dispatch = useDispatch();

    async function handleSigin() {        
        try {
            await dispatch(sigin(email, password));
            navigate('/');
        } catch (error){
            setErrorMessage(error.response.data.message);
        }
    }

    return (

        <Grid container className={classes.root}> 
            <Grid 
            item
            container 
            direction = "column" 
            justify = "center" 
            alignItems = "center" 
            md= {7} 
            className = {classes.image}> 
                <Typography style={{color: '#F5DEB3', fontSize: 35, lineHeight: '45px'}} m = {20}>
                    <strong>Simplificando a forma de conectar desenvolvedores de software!</strong>
                </Typography>

                <Typography variant="body2" style={{color: 'rgb(255,255,255, 0.7)', marginTop: 30, fontSize: 15, lineHeight: '30px'}}>
                    Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de software.
                </Typography>
          </Grid>
          
          <Grid item md= {5}>
            <Box display = "flex" flexDirection = "column" alignItems = "center" mt = {8}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant = "h5">
                    Acesso
                </Typography>

                <form className = {classes.form}>   
                    <TextField 
                        variant = "outlined"
                        margin = "normal"
                        required
                        fullWidth
                        id = "email"
                        label = "email"
                        name = "email"
                        autoComplete = "email"
                        autoFocus
                        value = {email}
                        onChange = {(event) => setEmail(event.target.value)}    
                    />
                    <TextField 
                        variant = "outlined"
                        margin = "normal"
                        required
                        fullWidth
                        name = "password"
                        label = "senha"
                        type = "password"
                        id = "password"
                        autoComplete = "current-password"
                        value = {password}
                        onChange = {(event) => setPassword(event.target.value)} 
                    />

                    <Button fullWidth 
                        variant = "contained" 
                        color ="primary" 
                        className={classes.button} 
                        onClick = {handleSigin}>
                        entrar
                    </Button>

                    {
                        errorMessage &&
                        <FormHelperText error>
                            {errorMessage}
                        </FormHelperText>
                    }

                    <Grid container>
                        <Grid item> 
                            <Link>Esqueceu sua senha?</Link>
                        </Grid>

                        <Grid item>
                        <Link>Não tem uma conta? Registre-se! </Link>
                        </Grid>
                    </Grid>
                </form>
                <Copyright />
            </Box>
          </Grid>
        </Grid>
    )
}

export default Sigin;