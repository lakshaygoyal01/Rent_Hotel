import City from "./components/City";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Newpage from "./components/Newpage";


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path='/' element={<City />} />
        <Route path='/Property' element={<Newpage />} />
      </Routes>
    </Router>
  );
}

export default App;
