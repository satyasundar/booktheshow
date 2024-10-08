import React from 'react'
import Header from './components/Header'
import MovieList from './components/MovieList'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Now Showing</h1>
        <MovieList />
      </main>
      <Footer />
    </div>
  )
}

export default App