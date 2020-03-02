import React, {useState} from 'react';
import './App.css';
import {MainHeader} from './components/LoggedOutMainHeader';
// import {LoginBox} from './components/LoginBox'
import {LoginPage} from './components/LoginPage'


function App() {
  const [loggedInStatus,setLoggedInStatus] = useState(0);

  const setUserLoggedInStatus = (user:number) => {
    setLoggedInStatus(user);
  }
  if(loggedInStatus == 0){
    return (
    <div className="App">
       <LoginPage/>
    </div>
  );
  }
  else{
    return (
    <div className="App">
       <MainHeader/>
    </div>
  );
  }
  
}

export default App;
