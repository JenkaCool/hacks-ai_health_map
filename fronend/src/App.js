import React from "react";
import { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useNavigate, Outlet } from "react-router-dom";
import { useCookies, CookiesProvider } from "react-cookie";

import './App.css';

import Topbar from './components/Topbar';

function App() {
  const navigate = useNavigate();

    let [townname, setTownname] = useState(null);

  return (
      <div className="App">
        <div className="Wrapper">
          <Topbar/>
          <div className="Content">
            <CookiesProvider>
              <Outlet context={[townname, setTownname]} />
            </CookiesProvider>
          </div>
        </div>
      </div>
  );
}

export default App;