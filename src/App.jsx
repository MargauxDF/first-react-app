import './App.css';
import { Container } from './components/Container';
import { Wilder } from './Wilder';

const wilders = [
  { 
    name: 'Margaux', city: 'Lyon', skills: [
      { title: 'PHP', votes: 25 },
      { title: 'JavaScript', votes: 10 },
    ]
  },
  { 
    name: 'Tritcha', city: 'Lyon', skills: [
      { title: 'PHP', votes: 20 },
      { title: 'React', votes: 10 },
    ]
  },
  { 
    name: 'Norhen', city: 'Lyon', skills: [
      { title: 'PHP', votes: 30 },
      { title: 'JavaScript', votes: 5 },
    ]
  },
  { 
    name: 'Aurélien', city: 'Lyon', skills: [
      { title: 'PHP', votes: 25 },
      { title: 'JavaScript', votes: 10 },
    ]
  },
];

function App() {
  return (
    <div>
      <header>
        <Container>
          <h1>Wilders Book</h1>
        </Container>
      </header>
      <Container>
        <h2>Wilders</h2>
        <section className="card-row">
          {
            wilders.map((wilder, index) => 
            <Wilder 
              key={index}
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
