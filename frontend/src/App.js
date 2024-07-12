import Signup from "./components/Signup";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import AdminCategory from './pages/AdminCategory'
import AdminItem from './pages/AdminItem'

function App() {
  return (
    <div className="App">
      

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/admin/category" element={<AdminCategory />}></Route>
          <Route path="/admin/item" element={<AdminItem />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
