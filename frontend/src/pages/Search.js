import React from "react";

import overflow from '../assets/overflow.png';

import './Search.css'

export default function Main() {
    return (
        <div className="container">
            <header>
                <img src={overflow} alt='logo'/>
            </header>
            
            <main>
            <form>
                    <input
                        id="tag" 
                        placeholder="Informe uma tag" 
                        required/>
                    <input 
                        id="score" 
                        placeholder="Pontuação mínima" />
                    <input 
                        id="limit" 
                        placeholder="Número de resultados"/>
                    
                    <select>
                        <option value="" selected disabled hidden>Ordenar como</option>
                        <option value="desc">Decrescenete</option>
                        <option value="asc">Crescente</option>
                    </select>
                    <button>Pesquisar</button>
                </form>
            </main>
            
            <footer>

            </footer>
        </div>
    );
}