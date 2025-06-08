import React from "react";
import "./App.css"

export default function CoverPage() {
  return (
    <div className="flex flex-col min-h-screen text-center bg-gray-900 text-white">
      {/* Header */}
      <header className="py-6 border-b border-gray-700">
        <nav className="container mx-auto flex justify-center space-x-8 text-lg font-semibold">
          <a href="#" className="hover:text-orange-500">
            Home
          </a>
          <a href="#" className="hover:text-orange-500">
            Features
          </a>
          <a href="#" className="hover:text-orange-500">
            Contact
          </a>
        </nav>
      </header>

      {/* Main Hero */}
      <main className="flex-grow flex flex-col justify-center items-center px-4 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Cover your page.
        </h1>
        <p className="text-gray-400 text-xl mb-10">
          Cover is a one-page template for building simple and beautiful home pages.
          Download, edit the text, and add your own fullscreen background photo to
          make it your own.
        </p>
        <a
          href="#"
          className="bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition transform hover:scale-105"
        >
          Learn more
        </a>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-gray-700 text-gray-500 text-sm">
        <div className="container mx-auto">
          Cover template for{" "}
          <a href="https://tailwindcss.com/" className="underline hover:text-orange-500">
            Tailwind CSS
          </a>
          , by{" "}
          <a href="https://twitter.com/mdo" className="underline hover:text-orange-500">
            @mdo
          </a>
          .
        </div>
      </footer>
    </div>
  );
}
