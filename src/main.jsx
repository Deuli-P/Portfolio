import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// comment faire pour que le root ai la même bg color que la section ?
// selectionner le root et selectionner la section sur la même hauteur
// Puis dire que root a la même coleur que bg color de la même section
// limiter cela a chaque height de la section 

// mettre la même couleur de fond sur toute les sections et donc sur root


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
