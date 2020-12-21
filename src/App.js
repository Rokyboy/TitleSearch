import { useEffect , useState } from "react";
import { PostsList } from "./components/posts/list.components";
import { SearchInput } from "./components/search-input/serach-input.component";
import axios from './libs/axios'
import { Container } from "./components/container/container.component";

function App() {
  const [query, setQuery] = useState('')
  const [data, setData] = useState([])

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get('/posts', {
        params: {
          q: query
        }
      })
      setData(response.data)
    }
    loadData()
  }, [])

  useEffect(() =>{
    if (query && query.length < 3) {
      const loadData = async () => {
        const response = await axios.get('/posts', {
          params: {
            q: query
          }
        })
        setData(response.data)
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
        <PostsList posts={data}/>
      </Container>
    </div>
  );
}

export default App;
