import "./App.css";
import ClimbCard from "./components/ClimbCard";
import { climbs } from "./mockData";

function App() {
  return (
    <div className="App">
      <header className="App-header">Send it!</header>
      <main>
        {climbs.map((climb) => {
          return <ClimbCard climb={climb} />;
        })}
      </main>
    </div>
  );
}

export default App;
