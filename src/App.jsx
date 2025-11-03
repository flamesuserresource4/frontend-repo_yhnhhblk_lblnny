import React from 'react';
import Navbar from './components/Navbar';
import HomeAbout from './components/HomeAbout';
import Prediction from './components/Prediction';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main>
        <HomeAbout />
        <Prediction />
        <Contact />
      </main>
      <footer className="mt-10 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Breast Cancer Prediction — Educational Demo
          </div>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-pink-600">About</a>
            <a href="#predict" className="hover:text-pink-600">Predict</a>
            <a href="#contact" className="hover:text-pink-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
