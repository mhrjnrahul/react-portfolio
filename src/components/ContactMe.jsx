import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const contactItems = [
  {
    icon: <Mail className="w-5 h-5 text-emerald-400" />,
    label: "Email",
    value: "maharjanrahul58@gmail.com",
    href: "mailto:maharjanrahul58@gmail.com",
  },
  {
    icon: <Phone className="w-5 h-5 text-emerald-400" />,
    label: "Phone",
    value: "+977 9761697930",
    href: null,
  },
  {
    icon: <MapPin className="w-5 h-5 text-emerald-400" />,
    label: "Location",
    value: "Patan Dhoka, Lalitpur",
    href: null,
  },
];

function ContactMe() {
  return (
    <div className="py-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -60 }}
        transition={{ duration: 0.8 }}
        className="my-20 text-center text-4xl"
      >
        Get in <span className="text-neutral-500">Touch</span>
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Contact Info */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.8 }}
          className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm"
        >
          <h3 className="text-white text-lg font-semibold mb-2">
            Let's connect
          </h3>

          <div className="space-y-5">
            {contactItems.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="bg-neutral-800 p-3 rounded-xl flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-neutral-500 text-xs mb-0.5">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-neutral-200 text-sm hover:text-emerald-400 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-neutral-200 text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 60 }}
          transition={{ duration: 0.8 }}
          action="https://formsubmit.co/1a26f3102e0b309be8d93222041bd936"
          method="POST"
          className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm space-y-5"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div>
            <label
              htmlFor="name"
              className="block text-neutral-400 text-xs mb-2 uppercase tracking-wider"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-neutral-100 text-sm focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 focus:outline-none transition placeholder-neutral-600"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-neutral-400 text-xs mb-2 uppercase tracking-wider"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-neutral-100 text-sm focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 focus:outline-none transition placeholder-neutral-600"
              placeholder="john@example.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-neutral-400 text-xs mb-2 uppercase tracking-wider"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-neutral-100 text-sm focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 focus:outline-none transition resize-none placeholder-neutral-600"
              placeholder="What's on your mind..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-semibold text-sm py-3 px-4 rounded-xl transition-all duration-200"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
}

export default ContactMe;
