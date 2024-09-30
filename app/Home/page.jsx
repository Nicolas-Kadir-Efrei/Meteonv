'use client';

import { useState } from 'react';
import Link from 'next/link';
import ColorSchemesExample from '../components/Navbar';

export default function Home() {
  const [inputValue, setInputValue] = useState('');

  // Fonction pour gérer le changement de l'input et capitaliser la première lettre
  const handleChange = (e) => {
    const value = e.target.value;
    // Capitalise la première lettre et concatène le reste du texte
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
            onChange={handleChange} // Appel à handleChange ici
            placeholder="Tapez quelque chose"
          />
          <Link href={`/${encodeURIComponent(inputValue)}`}>
            <button className="AHTAGRANDMERE" type="submit">Appuie</button>
          </Link>
        </form>
      </div>
    </div>  
  );
}
