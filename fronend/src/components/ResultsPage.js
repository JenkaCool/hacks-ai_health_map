import React from "react";
import { useState, useEffect } from 'react';
import {Route, Routes, BrowserRouter, Link} from 'react-router-dom';
import { useNavigate, Outlet } from "react-router-dom";

import '../styles/ResultsPage.css';

import Button from './Button';

function ResultsPage() {
    return (
        <>
            <Button text={"Вернуться"} link={`/`}/>
            <div className="results-list">
                <div className="analysis">
                    <h3>Статистика</h3>
                </div>
                <div className="compare">
                    <h3>Сравнение с другими районами</h3>
                </div>
                <div className="recomend">
                    <h3>Рекомендации</h3>
                </div>
            </div>
        </>
    );
}

export default ResultsPage;

