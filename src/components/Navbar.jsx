import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faFilm} size="2x" className="text-yellow-400" />
              <span className="text-2xl font-semibold">Best Movies Of All-Time</span>
            </Link>
            <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium">Home</Link>
            <Link to="/watchlist" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium">Watchlist</Link>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/rithvikkumar3" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <FontAwesomeIcon icon={faGithub} size="2x" className="text-gray-300 hover:text-white" />
            </a>
            <a href="https://linkedin.com/in/rithvikkumar" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-gray-300 hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
