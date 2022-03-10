import "./App.css";
import AddHello from "./components/AddHello";
import HelloList from "./components/HelloList";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <AddHello />
      <HelloList />
    </div>
  );
}

export default App;
