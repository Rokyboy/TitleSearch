import { useEffect , useState } from "react";
import { MoviesList } from "./components/movies/list.components";
import { SearchInput } from "./components/search-input/serach-input.component";
import axios from './libs/axios'
import { Container } from "./components/container/container.component";

function App() {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])

  useEffect(() =>{
    
    if (query && query.length >= 3) {
      const loadData = async () => {
        const response = await axios.get('', {
          params: {
            s: query
          }
        })
        if(response.data.Search){
          setMovies(response.data.Search)
        }
      }
      loadData()
    }
  }, [query])


  const handelChangeQuerry = (value) => {
    setQuery(value)
  }

  const handleClearQuerry = () => {
    setQuery('')
  }

  return (
    <div className="App">
      <Container>
        <SearchInput 
          query ={query}
          onChange={handelChangeQuerry} 
          onClear={handleClearQuerry}
        />
        <MoviesList movies={movies}/>
      </Container>
    </div>
  );
}

export default App;
