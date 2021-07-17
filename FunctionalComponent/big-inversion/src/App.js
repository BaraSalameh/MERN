import './App.css';
import PersonCard from './components/PersonCard'
function App() {
  return (
    <div className="App">
      <PersonCard firstName="Bara" lastName = "Salameh" age = {23} hairColor = "blonde"/>
      <PersonCard firstName="Jad" lastName = "Dawani" age = {25} hairColor = "bald"/>
      <PersonCard firstName="Yousef" lastName = "Nour" age = {27} hairColor = "black"/>
      <PersonCard firstName="Mohammad" lastName = "Salameh" age = {29} hairColor = "Red"/>
    </div>
  );
}

export default App;
