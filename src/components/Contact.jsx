import React from 'react';
import { Phone, MapPin, Mail, Users } from 'lucide-react';

const Contact = React.memo(() => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Phone className="w-4 h-4" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Switch to Smart?</h2>
          <p className="text-xl text-gray-600">Contact us for quotations, bulk orders, and dealership inquiries</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <MapPin className="w-6 h-6 text-blue-600" />
                <span>Visit Our Office</span>
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 mb-2 leading-relaxed">
                    A-183 Ambica Industrial-2, Near Olive Circle,<br />
                    Gandhi Kutir Road, Bhattar, Surat - 395017
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Business Hours:</p>
                  <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <Phone className="w-6 h-6 text-blue-600" />
                <span>Quick Contact</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <span className="text-gray-700 font-medium">Customer Care</span>
                  <a href="tel:7990414919" className="font-bold text-blue-600 hover:text-blue-700 transition-colors">7990414919</a>
                </div>
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-100">
                  <span className="text-gray-700 font-medium">Business Inquiries</span>
                  <a href="tel:9687637511" className="font-bold text-green-600 hover:text-green-700 transition-colors">9687637511</a>
                </div>
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg border border-purple-100">
                  <span className="text-gray-700 font-medium">Email</span>
                  <a href="mailto:kblights29@gmail.com" className="font-bold text-purple-600 hover:text-purple-700 transition-colors break-all">kblights29@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your Phone"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Product Interest</label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                  <option value="">Select Product Category</option>
                  <option value="switches">Smart Switches</option>
                  <option value="lights">Smart Lighting</option>
                  <option value="automation">Home Automation</option>
                  <option value="bulk">Bulk/Dealership Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
              >
                <Mail className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Dealer Network CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Become a KB Switches Dealer</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join our growing network of dealers across India. Attractive margins, marketing support, and exclusive territories available.
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center space-x-2 shadow-lg">
            <Users className="w-5 h-5" />
            <span>Partner With Us</span>
          </button>
        </div>
      </div>
    </section>
  );
});

export default Contact;