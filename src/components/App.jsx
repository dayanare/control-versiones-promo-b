import { useEffect, useState } from "react";
import "../styles/App.css"
import getDataApi from "../services/api";
import ListDrinks from "./ListDrinks";
import local from "../services/localstoarge"

function App() {
  const [drinks, setDrinks] = useState([])
  const [search, setSearch] = useState(local.get("search", "margarita"))

  useEffect(() => {
    getDataApi(search).then(data => setDrinks(data))
  }, [search])

  /*
    1.- No esta el [] --> se comporta igual que cuando esta el useEffect
    2.- Cuando esta el []--> Se ejecuta una sola vez al cargar la pagina
    3.-[varEstado]-- > se ejecutara cada vez que la variable estado cambie (buscadores)
  */

  useEffect(() => {
    local.set("search", search)
  }, [search])

  return (
    <main>
      <h1>Lista de bebidas</h1>
      <input type="text" value={search} onChange={(ev) => setSearch(ev.target.value)} />
      <ListDrinks drinks={drinks} />
    </main>
  )
}

export default App
