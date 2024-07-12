import Signup from "./components/Signup";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import ClientNavigationBar from './pages/AdminCategory'

function App() {
  return (
    <div className="App">
      

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/nav" element={<ClientNavigationBar />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
