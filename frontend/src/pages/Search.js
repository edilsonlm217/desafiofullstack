import React, { useState } from "react";
import api from '../services/api';

import overflow from '../assets/overflow.png';

import './Search.css'

export default function Main() {
    
    const [users, setUsers] = useState([]);
    const [tag, setTag] = useState('');
    const [score, setScore] = useState('');
    const [limit, setLimit] = useState('');
    const [sort, setSort] = useState('');
    
    async function handleSubmit(e) {
        e.preventDefault();
        
        const json = {
            "sort": sort.selectSort,
            "tag": tag,
            "score": score,
            "limit": limit,
        }
        const response = await api.post('/search', json);

        setUsers(response.data);
    }
    
    return (
        <div className="container">
            <header>
                <img src={overflow} alt='logo'/>
            </header>
            
            <main>
            <form onSubmit={handleSubmit}>
                    <input
                        id="tag" 
                        onChange={event => setTag(event.target.value)}
                        placeholder="Informe uma tag" 
                        required/>
                    <input 
                        id="score" 
                        onChange={event => setScore(event.target.value)} 
                        placeholder="Pontuação mínima" />
                    <input 
                        id="limit" 
                        onChange={event => setLimit(event.target.value)} 
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