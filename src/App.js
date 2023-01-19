import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CardsPage from './pages/CardsPage';
import SetsPage from './pages/SetsPage';
import DeckPage from './pages/DeckPage';

function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <Routes>

        <Route path='/' element={<CardsPage />} />
        <Route path='/sets' element={<SetsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
