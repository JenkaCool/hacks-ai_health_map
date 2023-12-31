import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link, useNavigate, Outlet } from "react-router-dom";

import '../styles/Topbar.css';
import logoImg from '../images/logo.png';

const Topbar = () => {
    const navigate = useNavigate();
    let [townname, setTownname] = useState(null);

    const handleSelectedTown = event => {
        setTownname(event.target.value);
    }

    const handleToMainPage = event => {
        navigate("/");
        window.location.reload();
    }

    return (
        <header>
            <div className="logo">
                <Link to="/">
                    <img
                        className="round-logo"
                        src={logoImg}
                        alt="Логотип"
                        width={100}
                        height={100}
                    />
                </Link>
            </div>
            <div className="header-text">
                <h2>Влияние городской инфраструктуры на здоровье</h2>
                <div id="towns" className="select-town in-one-row">
                    <select className="custom-select" onChange={handleSelectedTown}>
                        <option hidden>Выбрать город...</option>
                        <option id="t1">Екатеринбугр</option>
                        <option id="t2">Петрозаводск</option>
                        <option id="t3">Тула</option>
                    </select>
                </div>
            </div>
        </header>
    );
}

export default Topbar;