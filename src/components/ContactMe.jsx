import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

function ContactMe() {
  return (
    <div className="ml-[-20px] min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="bg-black p-8 rounded-2xl backdrop-blur-sm border border-gray-700">
          <h2 className="text-4xl font-bold text-white mb-8">Get in Touch</h2>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-emerald-500" />
              </div>
              <a href='https://mail.google.com/mail/?view=cm&fs=1&to=maharjanrahul58@gmail.com' target='_blank' rel='noreferrer noopener'>
              <div>
                <p className="text-gray-400">Email</p>
                <p className="text-white">maharjanrahul58@gmail.com</p>
              </div>
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                <Phone className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <p className="text-gray-400">Phone</p>
                <p className="text-white">+977 9761697930</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <p className="text-gray-400">Location</p>
                <p className="text-white">Patan Dhoka, Lalitpur</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-black p-8 rounded-2xl backdrop-blur-sm border border-gray-700">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-400 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-black border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-black border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 bg-black border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                placeholder="Your message here..."
              />
            </div>

            <button
              type="button"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center space-x-2 transition-colors"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;