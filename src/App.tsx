import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./components/About";
import Documentation from "./components/Documentation";
import Pricing from "./components/Pricing";

export default function CoverPage() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen text-center bg-zinc-950 text-white">
        {/* Header */}
        <header className="py-6 border-b border-gray-700">
          <nav className="container mx-auto flex justify-center space-x-8 text-lg font-semibold">
            <Link to="/" className="hover:text-gray-500">
              Home
            </Link>
            <Link to="/about" className="hover:text-gray-500">
              About
            </Link>
            <Link to="/documentation" className="hover:text-gray-500">
              Documentation
            </Link>
              <Link to="/pricing" className="hover:text-gray-500">
              Pricing
            </Link>
          </nav>
        </header>

        {/* Route-controlled content */}
        <Routes>
          <Route
            path="/"
            element={
              <main className="flex-grow flex flex-col justify-center items-center px-4 max-w-3xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  ProctorView
                </h1>
                <p className="text-gray-400 text-xl mb-10">
                  AI-powered secure online examination system for modern institutions.
                  ProctorView offers a comprehensive solution for conducting online exams with advanced AI features, ensuring integrity and security.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-md px-4 mb-12">
                  <a
                    href="https://drive.google.com/uc?export=download&id=1T4x7IvvP51hKu9bLTMxsx4sylTZ1qLWd"
                    className="flex-1 bg-gray-700 hover:bg-gray-800 px-6 py-3 rounded-xl text-sm font-semibold shadow-lg transition transform hover:scale-105"
                  >
                    Download for Windows (.exe) 
                  </a>
                  <a 
                    href="https://drive.google.com/uc?export=download&id=1_YOWXva2SHEhe0hbl_1pkmjHJ3nIBeZk"
                    className="flex-1 bg-gray-700 hover:bg-gray-800 px-6 py-3 rounded-xl text-sm font-semibold shadow-lg transition transform hover:scale-105"
                  >
                    Download for Linux (.deb)
                  </a>
                </div>

              </main>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>


     
        <footer className="py-6 border-t border-gray-700 text-gray-500 text-sm">
          <div className="container mx-auto">
            Copyright &copy; ProctorView, Developed by{" "}
            <a
              href="https://github.com/AmanRembersu"
              className="underline hover:text-gray-500"
            >
              Aman
            </a>
            , by{" "}
            <a
              href="https://x.com/Aman_rembersu/"
              className="underline hover:text-gray-500"
            >
              @aman
            </a>
            .
          </div>
        </footer>
      </div>
    </Router>
  );
}
