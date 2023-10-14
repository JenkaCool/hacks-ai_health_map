import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { StrictMode } from "react";
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AboutProjectPage from './components/AboutProjectPage';
import MapPage from './components/MapPage';
import ResultsPage from './components/ResultsPage';
import NotFoundPage from './components/NotFoundPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<AboutProjectPage/> } />
                    <Route exact path="searching" element={<MapPage/>} />
                    <Route exact path="results" element={<ResultsPage/>} />
                    <Route path="*" element={<NotFoundPage/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
