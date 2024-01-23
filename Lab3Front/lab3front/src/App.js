import Home from './components/home';
import Items from './components/items';
import Navbar from './components/navbar';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     
     <Navbar/>
     <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route path='home' element={<Home />}></Route>
      <Route path='items' element={<Items />}></Route>
     </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
