import { useState } from 'react'
import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <>
        <div className='Header'>
            <a href="">aaa</a>
            <a href="">aaa</a> 
        </div>

            <div className='container'>
                <div className='coluna'>
                    <div className='linha'>
                        <p className='titulonome '>A N N A</p>
                    </div>
                    <div className='linha'>
                        <p className='subtitulonome'>PACHECO</p>
                    </div>
                </div>
                <div className='coluna'>
                    <img src="" alt="assfdsdfsdg" className='imagem' />
                </div>
            </div>
        </>
    )
}

export default Home;