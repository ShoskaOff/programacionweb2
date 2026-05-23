import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const items
   = ['Paloma', 'Andres cepeda', 'Firme por los patria'];
   return (
    <section>
      <div>Candidatos a la presidencia de COLOMBIA</div>
      <ul>
        {
          items.map((item, index)=>(
           <li key = {index}>{item}</li>
        ))
      }
      </ul>
    </section>
   );
}

export default App
