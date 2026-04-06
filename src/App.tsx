import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/home';
import MenuPage from './pages/menu';

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen">
        <div className="pt-16 md:pt-0">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route
              path="*"
              element={
                <div className="min-h-screen bg-bg-deepest flex flex-col items-center justify-center gap-6 px-6 text-center">
                  <p className="text-xs font-sans tracking-[0.25em] uppercase text-text-muted">404</p>
                  <h1 className="font-serif text-4xl text-text-primary font-normal">Page not found</h1>
                  <Link
                    to="/"
                    className="text-sm font-sans text-accent hover:text-accent-hover transition-colors duration-200"
                  >
                    Back to Sumi
                  </Link>
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
