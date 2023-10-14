import React from "react";
import { useState, useEffect } from 'react';
import {Route, Routes, BrowserRouter, Link} from 'react-router-dom';
import { useNavigate, Outlet } from "react-router-dom";

function ResultsPage() {
    return (
        <>
            <Link to="/searching">
                <button>Вернуться</button>
            </Link>
        </>
    );
}

export default ResultsPage;

