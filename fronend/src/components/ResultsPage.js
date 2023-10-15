import React from "react";
import { useState, useEffect } from 'react';
import {Route, Routes, BrowserRouter, Link} from 'react-router-dom';
import { useNavigate, Outlet } from "react-router-dom";

import Button from './Button';

function ResultsPage() {
    return (
        <>
            <Button text={"Вернуться"} link={`/`}/>
            <div className="results-list">
                <div className="analysis"></div>
                <div className="compare"></div>
                <div className="recomend"></div>
            </div>
        </>
    );
}

export default ResultsPage;

