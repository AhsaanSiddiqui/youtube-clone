import React from 'react'
import { Link } from 'react-router-dom'
import logoWhite from '/assets/logo-white.png'

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-900 w-full">
      {/* Connect Section */}
      <div className="border-b border-gray-200 py-4 px-8">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <span className="text-lg font-medium">Connect</span>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-900 hover:text-purple-600 transition-colors">
              <i className="fab fa-x-twitter text-2xl"></i>
            </a>
            <a href="#" className="text-gray-900 hover:text-purple-600 transition-colors">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="text-gray-900 hover:text-purple-600 transition-colors">
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="bg-gray-100 py-8 px-8 hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-5 gap-8">
          {/* About YouTube */}
          <div>
            <h3 className="font-semibold mb-3">About YouTube</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">How YouTube Works</a></li>
              <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Jobs</a></li>
              <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">YouTube Culture & Trends</a></li>
              <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">NFL Sunday Ticket</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-3">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">YouTube Kids</a></li>
              <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">YouTube Music</a></li>
              <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">YouTube Originals</a></li>
              <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">YouTube Podcasts</a></li>
              <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">YouTube Premium</a></li>
              <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">YouTube Select</a></li>
              <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">YouTube Studio</a></li>
              <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">YouTube TV</a></li>
            </ul>
          </div>

          {/* For Business */}
          <div>
            <h3 className="font-semibold mb-3">For Business</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Developers</a></li>
              <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">YouTube Advertising</a></li>
            </ul>
          </div>

          {/* For Creators */}
          <div>
            <h3 className="font-semibold mb-3">For Creators</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Creating for YouTube Kids</a></li>
              <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Creator Research</a></li>
              <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Creator Services Directory</a></li>
              <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">YouTube Artists</a></li>
              <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">YouTube Creators</a></li>
              <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">YouTube NextUp</a></li>
              <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">YouTube VR</a></li>
            </ul>
          </div>

          {/* Our Commitments */}
          <div>
            <h3 className="font-semibold mb-3">Our Commitments</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Creators for Change</a></li>
              <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">CSAI Match</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-200 py-4 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={logoWhite} alt="Logo" className="h-6 w-auto" />
            <span className="text-gray-900 font-medium">YouTube</span>
          </div>
          
          <div className="flex items-center gap-4">
            <Link to="/policies" className="text-gray-700 hover:text-purple-600 transition-colors">Policies & Safety</Link>
            <Link to="/copyright" className="text-gray-700 hover:text-purple-600 transition-colors">Copyright</Link>
            {/* <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Brand Guidelines</a> */}
            <Link to="/privacy" className="text-gray-700 hover:text-purple-600 transition-colors">Privacy</Link>
            <Link to="/terms" className="text-gray-700 hover:text-purple-600 transition-colors">Terms</Link>
          </div>
          
          <div className="flex items-center gap-2">
            <i className="fas fa-question-circle text-gray-700"></i>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Help</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

