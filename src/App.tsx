import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import HomePage from './pages/home';
import MenuPage from './pages/menu';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
    <BrowserRouter>
      <ScrollToTop />
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
    </MotionConfig>
  );
}
