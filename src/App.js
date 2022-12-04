import logo from "./logo.svg";
import "./App.css";
import Navbar from './assets/components/Navbar.js';
import Home from './assets/components/Home.js';

function App() {
  return (
    <div className="App">
      <Navbar  />
      <main>
        <Home />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
