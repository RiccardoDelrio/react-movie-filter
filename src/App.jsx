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
  const [search, setSearch] = useState("")

  /*   console.log(search);
    console.log(films); */

  useEffect(() => {
    if (selectedGenre) {
      const filteredFilms = filmsarray.filter((thisfilm,) =>
        selectedGenre === thisfilm.genre
      )
      setFilms(filteredFilms)
    } else {
      setFilms(filmsarray)
    }
  }, [selectedGenre])
  useEffect(() => {
    if (search) {
      const searching = films.filter((thisfilm) =>
        thisfilm.title.includes(search)

      )
      console.log(searching);
      setFilms(searching)
    } else {
      setFilms(filmsarray)
    }
  }, [search])



  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-between">
          <div className="col-3">
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="form-select"
              aria-label="Default select example">
              <option value=""   >Scegli un genere</option>
              {filmsarray.map((thisfilm, index) =>
                <option key={index}   >{thisfilm.genre}</option>)} {/* GENERAZIONE AUTOMATICA DELLE OPZIONI */}
            </select>
          </div>
          <div className="col-3">
            <input
              type="text"
              className="form-control"
              name="search"
              id="search"
              aria-describedby="helpId"
              placeholder="Cerca il tuo film"
              value={search}
              onChange={(e) => { setSearch(e.target.value) }}
            />

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
        <div className="row mt-4">
          <div className="col-8">
            <input
              type="text"
              className="form-control"
              name="search"
              id="search"
              aria-describedby="helpId"
              placeholder="Aggiungi un nuovo film"
            />
          </div>
          <div className="col-4">

            <button className="btn btn-primary">Add</button>
          </div>
        </div>
      </div >

    </>
  )
}

export default App
