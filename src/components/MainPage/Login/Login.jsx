import React, { useContext,useState} from "react";
import "./login.css"
import { AuthContextV2 } from "../../../store/AuthContextV2";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const { setLoginState } = useContext(AuthContextV2)
    function handleEmailInput(e){
        setEmail(e.target.value)
        console.log(email);
    }
    function handlePasswordInput(e){
        setPassword(e.target.value)
        console.log(password);
    }
    function handleSubmit(){
        if(email!=="" && password !== ""){
            if(email.includes("@") && password.length>7){
                setLoginState(true);
            }
        }
    }
    const defaultTheme = createTheme();
    return (
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={handleEmailInput}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handlePasswordInput}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleSubmit}
                >
                  Sign In
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      );
    // return (
    //     <div>
    //         <div className="main-login-container">
    //             <div className="login-form">
    //                 <div className="email-container">
    //                     Email:
    //                     <input type="text" onChange={handleEmailInput}/>
    //                 </div>
    //                 <div className="password-container">
    //                     Password:
    //                     <input type="text" onChange={handlePasswordInput}/>
    //                 </div>
    //                 <div className="login-button-container">
    //                     {/* <button className="login" onClick={() => setLoginState(true)}>Login</button> */}
    //                     <button className="login" onClick={handleSubmit}>Login</button>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )
}