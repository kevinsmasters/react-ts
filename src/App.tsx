import './App.css';
import { Container } from './components/Container';
import { Greet } from './components/Greet';

function App() {
  
  
  return (
    <div className="App">
      <Greet name={'Bob Bober'} isLoggedIn={true} messageCount={7} />
    </div>
  );
}

export default App;
