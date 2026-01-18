import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

function ContacSection() {
  return (
     <section className="w-full bg-gray-200 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* LEFT SIDE - MESSAGE FORM */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Send Message
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none"
            ></textarea>

            <button
              type="submit"
              style={{ backgroundColor: "#13ed13" }}
              className="w-full text-black font-semibold py-3 rounded-lg hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT SIDE - CONTACT INFO */}
        <div className="space-y-5">

          <div className="bg-white rounded-xl shadow-lg p-5 flex items-center gap-4">
            <div
              style={{ backgroundColor: "#13ed13" }}
              className="p-3 rounded-full"
            >
              <Phone className="text-black" />
            </div>

            <div>
              <h3 className="font-bold text-gray-800">Phone</h3>
              <p className="text-gray-600">+91 9876543210</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-5 flex items-center gap-4">
            <div
              style={{ backgroundColor: "#13ed13" }}
              className="p-3 rounded-full"
            >
              <Mail className="text-black" />
            </div>

            <div>
              <h3 className="font-bold text-gray-800">Email</h3>
              <p className="text-gray-600">contact@yourdomain.com</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-5 flex items-center gap-4">
            <div
              style={{ backgroundColor: "#13ed13" }}
              className="p-3 rounded-full"
            >
              <MapPin className="text-black" />
            </div>

            <div>
              <h3 className="font-bold text-gray-800">Address</h3>
              <p className="text-gray-600">
                Mumbai, Maharashtra, India
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ContacSection;
