import './App.css';
import { ButtonE } from './components/ButtonE';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
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
      {/* <Status status='success' />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Your Mom!</Heading>
      </Oscar>
      <Greet 
        name='Meowdy!' 
        messageCount={69} 
        isLoggedIn={true}  
      /> */}
      <ButtonE handleClick={(event, id) => {
        console.log('Button clicked', event, id)
      }} />
      <Input value='' handleChange={(event) => console.log(event)} />
    </div>
  );
}

export default App;
