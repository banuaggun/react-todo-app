import React from 'react'
import './App.css';
import Login from './components/Login';
import User from './components/User';
import Lists from './pages/Lists';

function App() {
  return (
    <div className="container">
      {localStorage.getItem("Name") ? (
        <>
          <User/>
          <Lists />
        </>
      ) : <Login/>
      }
    </div>
  );
}

export default App;
