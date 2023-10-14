import React from "react";
import { useState, useEffect } from 'react';
import {Route, Routes, BrowserRouter, Link} from 'react-router-dom';
import { useNavigate, Outlet } from "react-router-dom";

import '../App.css';

import mapImg from '../images/map.png';

function MapPage() {
    return (
        <section className="search">
            <div className="search">
                <form className="choose-from">
                    <input type="text" placeholder="Искать здесь..." />
                        <p>Выберите район или муниципальный объект для проведения оценки его влияния на здоровье человека. </p>
                        <select className="serch-list" name="select" size="3" multiple>
                            <option value="r1">Место/район №1</option>
                            <option value="r2">Место/район №2</option>
                            <option value="r3">Место/район №3</option>
                            <option value="r4">Место/район №4</option>
                            <option value="r5">Место/район №5</option>
                            <option value="r6">Место/район №6</option>
                            <option value="r7">Место/район №7</option>
                            <option value="r8">Место/район №8</option>
                            <option value="r9">Место/район №9</option>
                        </select>
                        <Link to="/results">
                            <input type="submit" value="Оценить влияние на объект" />
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



