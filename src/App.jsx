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
  const [film, setFilm] = useState(filmsarray)
  const [tuttiGeneri, setTuttiGeneri] = useState([])
  const [genereSelected, setGenereSelected] = useState("0")
  const [showedFilm, setShowed] = useState([])
  const [ricerca, setRicerca] = useState("")

  //Creazione ed assegnazione Del valore a ""tuttiGeneri"
  useEffect(() => {
    const generi = []
    film.forEach((element) => {
      if (!generi.includes(element.genre)) //controllo per evitare doppioni nei generi
        generi.push(element.genre)
    })
    setTuttiGeneri(generi) //assegno ai generi il valore del nuovo array
  }, [film]); //trighero in base al cambiamento di film 

  useEffect(() => {
    console.log(genereSelected);

    if (genereSelected !== "0") {
      const filterdFilm = film.filter(e => e.genre === genereSelected)
      console.log(filterdFilm);
      setShowed(filterdFilm)
      console.log(genereSelected);
    } else {
      setShowed(film)
      console.log(genereSelected);
    }

  }, [genereSelected])

  useEffect(() => {
    console.log(ricerca);
    const filterdFilm = film.filter(e => e.title.toLowerCase().includes(ricerca.toLowerCase()))
    setShowed(filterdFilm)

  }, [ricerca])

  console.log(tuttiGeneri)
  console.log(genereSelected);
  const handleClickGenere = ((e) => {  //funziona per aggiornare il valore del genere selezionato
    setGenereSelected(e.target.value)
    console.log(genereSelected);
  }
  )



  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-between">
          <div className="col-3">
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => { handleClickGenere(e) }} //ho ripreso il valore dall'elemento selezionato
            >
              <option value="0"   >Scegli un genere</option>
              {tuttiGeneri.map((element, index) =>
                <option
                  key={index}
                  value={element}
                >{element}</option>
              )}
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
              value={ricerca}
              onChange={(e) => { setRicerca(e.target.value) }} //ho ripreso il valore dall'elemento selezionato
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-4">
            <ul className="list-group">
              {showedFilm.map((element, index) =>
                <li className='list-group-item' key={index}>{element.title}</li>
              )}

            </ul>

          </div>

        </div>
        {/*    <div className="row mt-4">
          <h3>Aggiungi un nuovo film</h3>
          <form className='d-flex gap-5'  >
            <div className="col-8 d-flex gap-1">
              <input
                type="text"
                className="form-control"
                name="search"
                id="search"
                aria-describedby="helpId"
                placeholder="Titolo film"


              />
              <input
                type="text"
                className="form-control"
                name="search"
                id="search"
                aria-describedby="helpId"
                placeholder="Genere film"

              />
            </div>
            <div className="col-4">

              <button className="btn btn-primary">Add</button>
            </div>
          </form>
        </div> */}
      </div >

    </>
  )
}

export default App
