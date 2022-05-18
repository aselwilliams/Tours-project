import { useState,useEffect} from 'react';
import './App.css';
const url='https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () =>{
    setLoading(true);
    try{
      const response=await fetch(url);
      const tours= await response.json();
      setLoading(false);
      setTours(tours);
      console.log(tours)
    } catch (error){
      setLoading(false);
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchTours();
    
  }, [])
  return (
    <div className="App">
   
    </div>
  );
}

export default App;
