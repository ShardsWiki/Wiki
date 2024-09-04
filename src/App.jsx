import './css/App.css';
import './css/color.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Nav from './commons/Nav';
import Foot from './commons/Foot';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav />
      <div className='home-body'>
        <Routes>
          <Route path="/" element={<Inicio />} />
        </Routes>
      </div>
      <Foot />
    </div>
    </BrowserRouter>
  );
}

export default App;
