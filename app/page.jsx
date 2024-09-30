'use client';

import { useState } from 'react';
import weather from "./[ville]/weather.css";
import Link from 'next/link';
import ColorSchemesExample from './components/Navbar';
import Card from './components/Card';


export default function MyForm() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
<div>
  <ColorSchemesExample/>
  <div className='Titre'>
    <h4>BIENVENUE SUR LA METEO DE KADIR</h4>
    </div>


    <div>
    <div className="con" onSubmit={handleSubmit}>
      <input 
      className="inputcon"
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Tapez quelque chose"
      />
      <Link href={`/${encodeURIComponent(inputValue)}`}>
        <button className="AHTAGRANDMERE" type="submit">Appuie</button>
      </Link>
    </div>
  </div>
  
</div>  
  );
}
