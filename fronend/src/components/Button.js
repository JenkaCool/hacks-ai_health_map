import React, { useState, useEffect } from 'react';
import {Link, useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";

import '../styles/Button.css';

const Button = ({text, link}) => {
    const route = useNavigate();

    return (
        <>
            {text && link ?
                <Link to={link}><button className="button-content">{text}</button></Link>
            :
                <Link to="/"><button className="button-content"></button></Link>
            }
        </>
    );
}

export default Button;