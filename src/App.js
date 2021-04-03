import './App.css';
import Dictionary from "./Dictionary";
function App() {
  return (
    <div className="App">
      <div className="container">
     <h1>Dictionary</h1>
     <h3>Enter a keyword you would like to search</h3>
     <Dictionary />
     </div> 
     <div className="Footer">
     <p> <a href="https://github.com/Cassieopeia/dictionary-app-project" target="_blank" rel="noreferrer">
       Open-source code</a> by Cassandra Ghysel </p>
       </div>
    </div>
  );
}

export default App;
