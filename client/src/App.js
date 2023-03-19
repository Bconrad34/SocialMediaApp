import React, { useEffect, useState } from 'react';
import { Login } from "./components/Login";
import './App.scss';
import { Header } from './components/Header';

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api").then(res => res.json()).then(data => { setBackendData(data) });
  }, []);

  return (
    <div>
      <Header />
      <Login />
    </div>
  );
}

export default App;
