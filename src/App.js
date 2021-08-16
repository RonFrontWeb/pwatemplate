import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // useEffect(function () {
  //   Notification.requestPermission(function(status) {
  //     console.log('Notification permission status:', status);
  // });
  // },[])




  function displayNotification() {
    if(Notification.permission === "granted") {
      navigator.serviceWorker.getRegistration()
      .then(function(reg) {
        reg.showNotification("yo man");
      });
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => displayNotification()}>Notify me</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


Notification.requestPermission(function(status) {
  console.log('Notification permission status:', status);
});
export default App;
