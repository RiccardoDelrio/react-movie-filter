import { useState } from 'react'
const films = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]


function App() {

  return (
    <>
      <div className="container">
        <div className="row align-content-center">
          <div className="col-6">

            <select className="form-select" aria-label="Default select example">
              <option value="Scegli un genere"   >Scegli un genere</option>
              {films.map((thisfilm, index) => <option key={index} value={thisfilm.genre} >{thisfilm.genre}</option>)} {/* GENERAZIONE AUTOMATICA DELLE OPZIONI */}
            </select>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
