import React from "react";
import { useState, useEffect} from 'react';
import {Route, Routes, BrowserRouter, Link} from 'react-router-dom';
import { useNavigate, Outlet } from "react-router-dom";

import '../../styles/SearchBar.css';

function SearchBar() {
    return (
        <section className="search-container">
            <p className="search-title">Выберите район или муниципальный объект для проведения оценки его влияния на здоровье человека. </p>
            <input className="search-input" type="text" placeholder="Искать здесь..." />
        </section>
    );
}

export default SearchBar;
