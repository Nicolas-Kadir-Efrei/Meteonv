'use client';

import { useState } from 'react';
import Link from 'next/link';
import ColorSchemesExample from '../components/Navbar';

export default function Home() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
    setInputValue(capitalizedValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <ColorSchemesExample />
      <div className='Titre'>
        <h4>BIENVENUE SUR LA METEO DE KADIR</h4>
      </div>

      <div>
        <form className="con" onSubmit={handleSubmit}>
          <input 
            className="inputcon"
            type="text" 
            value={inputValue} 
            onChange={handleChange} 
            placeholder="Tapez une ville"
          />
          <Link href={`/${encodeURIComponent(inputValue)}`}>
            <button className="AHTAGRANDMERE" type="submit">Recherche</button>
          </Link>
        </form>
      </div>
    </div>  
  );
}