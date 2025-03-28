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
  const [genres, setGenres] = useState([])
  const [selectedGenre, setSelectedGenre] = useState("")
  const [search, setSearch] = useState("")
  /*  const [newFilm, setNewfilm] = ("") */
  const [newTitolo, setNewtitolo] = useState("")
  const [newGenere, setNewGenere] = useState("")


  /*   console.log(search);
    console.log(films); */


  //Selezionare il genere desiderato  e restituire l'array filtrato
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


  //Funzione per la ricerca
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

  const handleSubmitForm = (e) => {
    e.preventDefault()
    const filmGenerato = { title: newTitolo, genre: newGenere }
    const newFilm = [...films, filmGenerato]
    setFilms(newFilm)
    genresFinder()


  }
  const genresFinder = () => {
    const generi = []
    films.forEach((film) => {
      if (!generi.includes(film.genre)) {

        generi.push(film.genre)
      }

    })
    setGenres(generi)
    console.log(genres)

  }



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
              {genres.map((thisfilm, index) =>
                <option key={index} >{thisfilm.genre}</option>)} {/* GENERAZIONE AUTOMATICA DELLE OPZIONI */}
            </select>
          </div>
          <div className="col-3">
            <input         //input per la ricerca
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
              {films.map((thisfilm, index) => //generazione dei titoli 
                <li key={index} className="list-group-item">{thisfilm.title}</li>
              )}

            </ul>

          </div>

        </div>
        <div className="row mt-4">
          <h3>Aggiungi un nuovo film</h3>
          {/* form di aggiunta titoli */}
          <form onSubmit={handleSubmitForm} className='d-flex gap-5'  >
            <div className="col-8 d-flex gap-1">
              <input
                type="text"
                className="form-control"
                name="search"
                id="search"
                aria-describedby="helpId"
                placeholder="Titolo film"
                value={newTitolo}
                onChange={e => { setNewtitolo(e.target.value) }}
              />
              <input
                type="text"
                className="form-control"
                name="search"
                id="search"
                aria-describedby="helpId"
                placeholder="Genere film"
                value={newGenere}
                onChange={e => { setNewGenere(e.target.value) }}
              />
            </div>
            <div className="col-4">

              <button className="btn btn-primary">Add</button>
            </div>
          </form>
        </div>
      </div >

    </>
  )
}

export default App
