import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import MenuPage from './pages/menu';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </BrowserRouter>
  );
}
