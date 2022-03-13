import './App.css';
import { Container } from './components/Container';
import { Wilder } from './Wilder';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  //Hooks 
  const [wilders, setWilders] = useState([]);
  const [hasError, setHasError] = useState(false);

  //variables who defines functions
  const getWilders = async () => {
    //send HTTP request to API
    try {
      const result = await axios.get('http://127.0.0.1:4000/api/wilders');
      setWilders(result.data);
    } catch {
      setHasError(true);
    }
    
  };

  useEffect(() => {
    getWilders();
  }, []);

  useEffect (() => {
    console.log("Got update");
  }, [wilders]);

  //Return JSX
  return (
    <div>
      <header>
        <Container>
          <h1>Wilders Book</h1>
          <button onClick={() => getWilders()}>Update</button>
        </Container>
      </header>
      <Container>
        <h2>Wilders</h2>
        <section className="card-row">
          {
            wilders.map((wilder) => 
            <Wilder 
              key={wilder.id}
              name={wilder.name} 
              city={wilder.city} 
              skills={wilder.skills} />)
          }
        </section>
      </Container>
      <footer>
        <Container>
          <p>&copy; 2022 Wild Code School</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
