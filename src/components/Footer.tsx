import React from 'react'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">BookMyShow</h3>
            <p className="text-sm">The best way to book your entertainment!</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="text-sm">
              <li className="mb-2"><a href="#" className="hover:text-red-400">About Us</a></li>
              <li className="mb-2"><a href="#" className="hover:text-red-400">Contact Us</a></li>
              <li className="mb-2"><a href="#" className="hover:text-red-400">Terms of Service</a></li>
              <li className="mb-2"><a href="#" className="hover:text-red-400">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-400"><Facebook size={20} /></a>
              <a href="#" className="hover:text-red-400"><Twitter size={20} /></a>
              <a href="#" className="hover:text-red-400"><Instagram size={20} /></a>
              <a href="#" className="hover:text-red-400"><Youtube size={20} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2023 BookMyShow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer