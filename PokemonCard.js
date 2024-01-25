import React, { useState } from 'react';
import './Pokemon.css'; // Import CSS file for styling

function PokemonCard({ name, image, height, abilities,weight,types }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="pokemon-card">
      <img className="pokemon-logo" src={image} alt={name} />
      <div>
        <h3>Name: {name}</h3>
        <p>Height: {height}</p>
        <button className="btn" onClick={toggleDetails}>Know More</button>
      </div>
      {showDetails && (
        <div className="details-overlay">
          <div className="details-card">
            <button className="close-button" onClick={toggleDetails}>X</button>
            
            <img src={image} alt={name} />
            <div>
                <ul>
              <li>Weight:{weight}</li>
            <li>Height:{height}</li>
            </ul>
            <h4>Abilities:</h4>
            <ul>
              {abilities.map((ability, index) => (
                <li key={index}>{ability.ability.name}</li>
              ))}  
            </ul>
            <h4>Types:</h4>
            <ul>
              {types.map((type, index) => (
                <li key={index}>{type.type.name}</li>
              ))}  
            </ul>
            
            
            </div>
        
          </div>
        </div>
      )}
    </div>
  );
}

export default PokemonCard;
