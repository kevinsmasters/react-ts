import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './PersonList';

function App() {
  const personName = {
    first: 'Person',
    last: 'McPersonface'
  }

  const nameList = [
    {
      first: 'Kevin',
      last: 'Mathpapers'
    },
    {
      first: 'Sean',
      last: 'Mathpapers'
    },
    {
      first: 'Eric',
      last: 'Paranormas'
    }
  ]
  
  return (
    <div className="App">
      <Greet 
        name='Meowdy!' 
        messageCount={13} 
        isLoggedIn={false}  
      />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
