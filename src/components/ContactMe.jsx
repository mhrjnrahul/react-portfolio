import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

function ContactMe() {
  return (
    <div className="ml-[-20px] min-h-screen bg-black text-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Contact Info Section */}
          <div className="bg-zinc-900/50 p-6 md:p-8 rounded-2xl backdrop-blur-sm">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">
              Get in Touch
            </h1>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-zinc-800 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-gray-100">maharjanrahul58@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-zinc-800 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-gray-100">+977 9761697930</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-zinc-800 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-gray-100">Patan Dhoka, Lalitpur</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <form
            action="https://formsubmit.co/1a26f3102e0b309be8d93222041bd936"
            method="POST"
            className="space-y-6"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div>
              <label
                htmlFor="name"
                className="block text-gray-400 text-sm mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-zinc-800 rounded-lg px-4 py-3 text-gray-100 border border-zinc-700 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 focus:outline-none transition"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-400 text-sm mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-zinc-800 rounded-lg px-4 py-3 text-gray-100 border border-zinc-700 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 focus:outline-none transition"
                placeholder="john@example.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-400 text-sm mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full bg-zinc-800 rounded-lg px-4 py-3 text-gray-100 border border-zinc-700 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 focus:outline-none transition resize-none"
                placeholder="Your message here..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
