import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-100 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Links and Social Media */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              We are a company dedicated to helping you create the perfect marriage biodata. Our goal is to help you find the perfect match through our comprehensive platform.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-pink-400">Home</Link>
              </li>
              <li>
                <Link to="/create-profile" className="hover:text-pink-400">Create Profile</Link>
              </li>
              <li>
                <Link to="/profile-list" className="hover:text-pink-400">View Profiles</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-pink-400">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <p className="text-sm">
              <span className="block">Email: support@company.com</span>
              <span className="block">Phone: +123 456 7890</span>
              <span className="block">Address: 123 Street, City, Country</span>
            </p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-pink-400">
                <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.326v21.348c0 .732.593 1.326 1.325 1.326h11.488v-9.283h-3.125v-3.622h3.125v-2.672c0-3.1 1.893-4.785 4.657-4.785 1.325 0 2.464.099 2.796.143v3.24h-1.919c-1.504 0-1.796.715-1.796 1.763v2.311h3.591l-.468 3.622h-3.123v9.283h6.127c.73 0 1.324-.594 1.324-1.326v-21.348c0-.733-.594-1.326-1.325-1.326z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-pink-400">
                <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.923 2.204-4.923 4.923 0 .386.043.762.127 1.124-4.09-.205-7.719-2.165-10.148-5.144-.424.729-.666 1.574-.666 2.476 0 1.709.87 3.216 2.188 4.099-.809-.026-1.57-.248-2.236-.617v.062c0 2.388 1.699 4.382 3.95 4.835-.413.112-.849.171-1.296.171-.317 0-.626-.03-.928-.088.627 1.956 2.445 3.379 4.6 3.419-1.685 1.32-3.809 2.106-6.115 2.106-.398 0-.79-.023-1.175-.068 2.179 1.397 4.768 2.212 7.557 2.212 9.055 0 14.007-7.504 14.007-14.007 0-.213-.005-.425-.015-.636.961-.694 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-400">
                <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.317 3.608 1.292.975.975 1.23 2.242 1.292 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.317 2.633-1.292 3.608-.975.975-2.242 1.23-3.608 1.292-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.317-3.608-1.292-.975-.975-1.23-2.242-1.292-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.317-2.633 1.292-3.608.975-.975 2.242-1.23 3.608-1.292 1.266-.058 1.646-.069 4.85-.069m0-2.163c-3.259 0-3.667.012-4.947.07-1.286.058-2.602.337-3.63 1.366s-1.309 2.344-1.366 3.63c-.058 1.281-.07 1.689-.07 4.947s.012 3.667.07 4.947c.058 1.286.337 2.602 1.366 3.63s2.344 1.309 3.63 1.366c1.281.058 1.689.07 4.947.07s3.667-.012 4.947-.07c1.286-.058 2.602-.337 3.63-1.366s1.309-2.344 1.366-3.63c.058-1.281.07-1.689.07-4.947s-.012-3.667-.07-4.947c-.058-1.286-.337-2.602-1.366-3.63s-2.344-1.309-3.63-1.366c-1.281-.058-1.689-.07-4.947-.07zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} MarriageBiodata. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
