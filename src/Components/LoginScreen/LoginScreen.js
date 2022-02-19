import React, {useState} from 'react';
import './LoginScreen.css';
import SignUpScreen from '../../SignUpScreen/SignUpScreen'; 


function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  if(useState) {
    
  }

  return <div 
  className='loginScreen'
  style={{backbroundImage: "url('https://pinkroom-main.s3.amazonaws.com/f75774ea-9a7c-44ea-a7c7-91d1e9df10e6.jpg')"}}
  >
  <div className='loginScreen__background'>
    <img 
    className='loginScreen__logo'
    src='https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png'
    alt=''
    />
    <button 
    onClick={() => setSignIn(true)}
    className='loginScreen__button'>
      Sign in
    </button>
    <div className='loginScreen__gradient'/>
  </div>
  <div className='loginScreen__body'>
    {signIn ? (
      <SignUpScreen/>
    ) : (
    <>
    <h1>
      Unlimited films, TV Programms, and more
      </h1>
    <h2>
      Watch anywhere, Cancel at any time
      </h2>
    <h3>
      Ready to watch? Enter your email to create or restart your membership.
      </h3>
    <div className='loginScreen__input'>
      <form>
        <input type="email" placeholder="Email Address"/>
        <button
        onClick={() => setSignIn(true)}
        className='loginScreen__getStarted'>
          GET STARTED
          </button>
      </form>
    </div>
   
    
    </>
    )}
  </div>
  
  </div>;
}

export default LoginScreen;
