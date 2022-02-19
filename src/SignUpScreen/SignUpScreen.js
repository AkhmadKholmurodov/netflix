import React from 'react';
import {auth} from "../Components/HomeScreen/firebase"
import "./SignUpScreen.css"

 function SignUpScreen() {
     const emailRef = useRef(null);
     const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser) => {
            console.log(authUser);
        })
        .catch((error) => {
            alert(error.message)
        })
        
        const signIn = (e) => {
            e.preventDefault();
            console.log(signIn);
            
        };
    };

    
  return <div className='signUpScreen'>
      <form>
          <h1>SignIn</h1>
          <input ref={emailRef} placeholder='Email or Phone Number' type="email"/>
          <input ref={passwordRef} placeholder='Password' type="password"/>
          <button type='submit'>SignIn</button>
            <div className='assistants'>
                <div className='assistantRemember'>
                    <input className='checkbox' type="checkbox"/>
                        <h5>Remember me</h5>
                    </div>
                    <a href="#">Need help?</a>
                </div>
          <h4> 
            <span className='signUpScreen__gray'>New to Netflix?</span>
            <span className='signUpScreen__link' onClick={register}>Sign up now.</span>
          </h4>
      </form>
  </div>;
}

export default  SignUpScreen;