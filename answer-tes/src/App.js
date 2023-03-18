import "./App.css";
import Navbar from "./component/navbar";
// import Login from "./pages/login";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        {/* <Login /> */}
        <Home />
      </div>
    </div>
  );
}

export default App;
