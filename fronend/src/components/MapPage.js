import React from "react";
import { useState, useEffect } from 'react';
import {Route, Routes, BrowserRouter, Link} from 'react-router-dom';
import { useNavigate, Outlet } from "react-router-dom";

import '../App.css';
import '../styles/Button.css';

import SearchBar from './Map/SearchBar';
import mapImg from '../images/map.png';

function MapPage() {
    return (
        <section className="search">
            <div className="search">
                <form className="choose-from">
                    <SearchBar/>
                    <select className="serch-list" name="select" size="3" multiple>
                        <option style={{padding:"10px"}} value="r1">Место/район №1</option>
                        <option style={{padding:"10px"}} value="r2">Место/район №2</option>
                        <option style={{padding:"10px"}} value="r3">Место/район №3</option>
                        <option style={{padding:"10px"}} value="r4">Место/район №4</option>
                        <option style={{padding:"10px"}} value="r5">Место/район №5</option>
                        <option style={{padding:"10px"}} value="r6">Место/район №6</option>
                        <option style={{padding:"10px"}} value="r7">Место/район №7</option>
                        <option style={{padding:"10px"}} value="r8">Место/район №8</option>
                        <option style={{padding:"10px"}} value="r9">Место/район №9</option>
                    </select>
                    <Link to="/results">
                        <input type="submit" className="button-content" value="Оценить влияние" />
                    </Link>
                </form>
                <div className="map">
                    <img
                        src={mapImg}
                        alt="Карта"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </section>
    );
}

export default MapPage;



