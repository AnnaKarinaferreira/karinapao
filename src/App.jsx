import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home.jsx'; // Ajuste o caminho conforme necessário
import { Link } from "react-scroll";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </Router>
    );
};

export default App;