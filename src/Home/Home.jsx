import { useState } from 'react'
import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Home.css';
import img01 from './img01.png';


const Home = () => {
    return (
        <>
            <section>
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
            </section>
                <hr />
            <section>
                <p className='sobremim'>Sobre mim...</p>

            </section>

            <section>
                <p className='sobremim'>Skills</p>
                <ol>
                    <li >
                        <div class="icon"><i class="fa-solid fa-bicycle"></i></div>
                        <div class="title">Step 1</div>
                        <div class="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.</div>
                    </li>
                    <li >
                        <div class="icon"><i class="fa-solid fa-car"></i></div>
                        <div class="title">Step 2</div>
                        <div class="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.</div>
                    </li>
                    <li >
                        <div class="icon"><i class="fa-solid fa-helicopter"></i></div>
                        <div class="title">Step 3</div>
                        <div class="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.</div>
                    </li>
                    <li >
                        <div class="icon"><i class="fa-solid fa-plane"></i></div>
                        <div class="title">Step 4</div>
                        <div class="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.</div>
                    </li>
                    <li >
                        <div class="icon"><i class="fa-solid fa-rocket"></i></div>
                        <div class="title">Step 5</div>
                        <div class="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.</div>
                    </li>
                    <li >
                        <div class="icon"><i class="fa-solid fa-bus"></i></div>
                        <div class="title">Step 6</div>
                        <div class="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.</div>
                    </li>
                </ol>
            </section>
        </>
    )
}

export default Home;