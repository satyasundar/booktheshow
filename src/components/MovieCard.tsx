import React from 'react'
import { Star } from 'lucide-react'

interface Movie {
  id: number
  title: string
  image: string
  rating: number
}

interface MovieCardProps {
  movie: Movie
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={movie.image} alt={movie.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{movie.title}</h3>
        <div className="flex items-center">
          <Star className="text-yellow-400 mr-1" size={16} />
          <span className="text-sm text-gray-600">{movie.rating}/10</span>
        </div>
        <button className="mt-4 w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition duration-300">
          Book Now
        </button>
      </div>
    </div>
  )
}

export default MovieCard