import './App.css';
import PersonCard from './components/personCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={'Matthew'} lastName={'Sherman'} age={22} hairColor={'Brown'}/>
      <PersonCard firstName={'Ben'} lastName={'Feldman'} age={22} hairColor={'Black'}/>
    </div>
  );
}

export default App;
