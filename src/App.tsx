import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';

function App() {
  const personName = {
    first: 'Person',
    last: 'McPersonface'
  }
  return (
    <div className="App">
      <Greet 
        name='Meowdy!' 
        messageCount={13} 
        isLoggedIn={false}  
      />
      <Person name={personName} />
    </div>
  );
}

export default App;
