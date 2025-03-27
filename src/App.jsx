import { useState, useEffect } from 'react'
const filmsarray = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]


function App() {
  const [films, setFilms] = useState(filmsarray)
  const [selectedGenre, setSelectedGenre] = useState("")
  console.log(selectedGenre);
  useEffect(() => {
    if (selectedGenre) {
      const mappedFilms = filmsarray.filter((thisfilm,) =>
        selectedGenre === thisfilm.genre
      )
      console.log(mappedFilms);
      setFilms(mappedFilms)
    } else {
      setFilms(filmsarray)
    }
  }, [selectedGenre])

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-3">

            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="form-select"
              aria-label="Default select example">
              <option value="Scegli un genere"   >Scegli un genere</option>
              {filmsarray.map((thisfilm, index) =>
                <option key={index}   >{thisfilm.genre}</option>)} {/* GENERAZIONE AUTOMATICA DELLE OPZIONI */}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-4">
            <ul className="list-group">
              {films.map((thisfilm, index) =>
                <li key={index} className="list-group-item">{thisfilm.title}</li>
              )}

            </ul>

          </div>

        </div>
      </div >

    </>
  )
}

export default App
