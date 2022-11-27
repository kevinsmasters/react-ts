import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { Status } from './components/Status';
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
      {/* 
      <Person name={personName} />
      <PersonList names={nameList} /> */}
      <Status status='success' />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Your Mom!</Heading>
      </Oscar>
      <Greet 
        name='Meowdy!' 
        messageCount={69} 
        isLoggedIn={true}  
      />
    </div>
  );
}

export default App;
