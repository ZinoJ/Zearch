import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div className="app">
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        {/* <Route path="/search"><h1>Hello Search</h1></Route> */}
      </Routes>
    </div>
  );
}

export default App;
