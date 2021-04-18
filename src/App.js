import './App.css';
import Dictionary from "./Dictionary";
function App() {
  return (
    <div className="App">
      <div className="container">
     <h1>Dictionary</h1>
     <h3>What word do you want to look up?</h3>
     <Dictionary defaultKeyword="serendipity"/>
     </div> 
     <div className="Footer">
     <p> <a href="https://github.com/Cassieopeia/dictionary-app-project" target="_blank" rel="noreferrer">
       Open-source code</a> by Cassandra Ghysel </p>
       </div>
    </div>
  );
}

export default App;
