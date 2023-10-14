import React from "react";
import { useState, useEffect } from 'react';
import {Route, Routes, BrowserRouter, Link} from 'react-router-dom';
import { useNavigate, Outlet } from "react-router-dom";
import logoImg from "../images/logo.png";

function AboutProjectPage() {
    return (
        <>
            <Link to="/searching">
                <button>Перейти к карте</button>
            </Link>
        </>
    );
}

export default AboutProjectPage;

