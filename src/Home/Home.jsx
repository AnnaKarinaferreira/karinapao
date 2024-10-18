import { useState } from 'react'
import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Home.css';
import img01 from './img01.png';


const Home = () => {
    return (
    <>
    <div className='geral'>
           <div className='alinhamentolinks'>
           <p className='link1'><a href="">Portfolio Senai</a></p>
            <p className='link2'><a href="">Meus Projetos</a></p>
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
                <img src={img01} alt="assfdsdfsdg" className='imagem' />
            </div>
        </div>
        </div>
           
        </>
    )
}

export default Home;