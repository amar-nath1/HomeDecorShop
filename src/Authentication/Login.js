import axios from 'axios';
import { useContext, useRef, useState } from 'react';
import { Navbar, Spinner } from 'react-bootstrap';
import { Redirect, useHistory } from 'react-router-dom';
import Footer from '../Component/Footer/Footer';
import NavLinks from '../Component/NavBar/NavLinks';



import AuthContext from '../store/auth-context';

import classes from './Login.module.css';

const Login = () => {

  
const history=useHistory()
  const authCtx=useContext(AuthContext)
 


  const [isLogin, setIsLogin] = useState(true);
  const [isLoading,setIsLoading]=useState(false)

  const emailInputRef=useRef()
  const passwordInputRef=useRef()

  

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler=(event)=>{
    event.preventDefault()

    const emailInput=emailInputRef.current.value
  const passwordInput=passwordInputRef.current.value
  setIsLoading(true)

    if (isLogin)
    {
       fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD6gV-iYK4EULw5NTMHdnxDwyiMp9MDncI',
       {

        method:'POST',
        body:JSON.stringify({

          email:emailInput,
          password:passwordInput,
          returnSecureToken:true

        }),
        headers:{
          'Content-Type':'application/json'
        }

       }).then((res)=>{

        setIsLoading(false)

        if (res.ok){
          console.log('Login Successful')
          res.json().then((jwt)=>{
            
            authCtx.loginHandle(jwt.idToken,jwt.email)
            const userInfo={
              tok:jwt.idToken,
              email:jwt.email
            }
            
            localStorage.setItem('token',JSON.stringify(userInfo))
            let userEmail=jwt.email.replace(/\W/g, '')
            axios.get(`https://crudcrud.com/api/651b072f0c3343d4a2a5d8760cd2c5b7/cart${userEmail}`)
            .then((res)=>{

              localStorage.setItem(jwt.email,JSON.stringify(res.data))
              history.replace('/store')
            })
              
            
            
          })
        
        }

        else{

          return res.json().then((data)=>{
            if (data.error.message=='INVALID_PASSWORD'){
              alert('Incorrect Password')
            }
          })
        }

       })
    }
    else{

      fetch( 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD6gV-iYK4EULw5NTMHdnxDwyiMp9MDncI',
        {method:'POST',
      body:JSON.stringify({

        email:emailInput,
        password:passwordInput,
        returnSecureToken:true
      }),

      headers:{
        'Content-Type':'application/json'
      }
    
    }).then((res)=>{
      setIsLoading(false)
      if (res.ok){
        res.json().then((data)=>{
          authCtx.loginHandle(data.idToken,data.email)
          history.replace('/home')
        })
      }
      else{
        return res.json().then((data)=>{
          let errorMsg='Authentication Failed'
          if (data && data.error && data.error.message){
            errorMsg=data.error.message
          }
          alert(errorMsg)
          
        })
      }
      })
    }

  }

  return (
    <>
     <Navbar bg='dark' expand='sm' variant='dark' className="navbar-static-top">
        <NavLinks></NavLinks>
        </Navbar>
    
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef}/>
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <Spinner animation='border' variant='light'/>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
    <Footer></Footer>
    </>
  );
};

export default Login;
