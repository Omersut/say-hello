import "./App.css";
import AddHello from "./components/AddHello";
import HelloList from "./components/HelloList";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <AddHello />
      <HelloList />
      <Footer />
    </div>
  );
}

export default App;
