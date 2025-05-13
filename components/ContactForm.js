"use client";
import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.target;
    const formDataObj = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formDataObj,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setStatus("success");
          setFormData({ name: "", email: "", phone: "", message: "" });
          form.reset();
        } else {
          setStatus("error");
        }
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-bl pb-2 bg-clip-text text-transparent  to-green-900  from-green-300 tracking-tight mb-6 flex items-center justify-center gap-3 animate-fade-in relative">
          Contact Us Now
        </h2>

        {/* Subheading */}
        <p className="text-sm md:text-lg  max-w-xl md:max-w-2xl text-green-700 mb-12  mx-auto text-center animate-fade-in delay-100">
          Reach out to plan your <strong>Jungle Safari</strong> in{" "}
          <strong>Jim Corbett</strong> National Park. Let’s make your{" "}
          <strong>Jim Corbett Safari</strong> experience unforgettable!
        </p>

        {/* Form Container */}
        <div className="max-w-lg mx-auto bg-white border border-green-600 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <form
            action="https://formsubmit.co/itsanas477@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Hidden Fields for FormSubmit */}
            <input
              type="hidden"
              name="_next"
              value="https://corbettjunglesafari.in"
            />
            <input
              type="hidden"
              name="_subject"
              value="New Contact Form Submission - Jim Corbett Safari"
            />
            <input type="hidden" name="_captcha" value="false" />

            {/* Name Field */}
            <div className="relative">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-green-900 mb-1 transition-all duration-300"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-green-600 rounded-lg text-green-900 placeholder-green-700 placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all duration-300"
                required
                placeholder="Enter your name"
              />
            </div>

            {/* Email Field */}
            <div className="relative">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-green-900 mb-1 transition-all duration-300"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-green-600 rounded-lg text-green-900 placeholder-green-700 placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all duration-300"
                required
                placeholder="Enter your email"
              />
            </div>

            {/* Phone Field */}
            <div className="relative">
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-green-900 mb-1 transition-all duration-300"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-green-600 rounded-lg text-green-900 placeholder-green-700 placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all duration-300"
                required
                placeholder="Enter your phone number"
              />
            </div>

            {/* Message Field */}
            <div className="relative">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-green-900 mb-1 transition-all duration-300"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-green-600 rounded-lg text-green-900 placeholder-green-700 placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-green-400 focus:bg-white transition-all duration-300 h-32 resize-none"
                required
                placeholder="Tell us about your safari plans"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full cursor-pointer bg-gradient-to-r from-green-400 to-green-600 text-white py-3 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-green-400 hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              disabled={status === "submitting"}
            >
             
              {status === "submitting" ? (
                <svg
                  className="animate-spin h-5 w-5 text-white inline-block mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
              ) : null}
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Status Messages */}
          {status === "success" && (
            <p className="text-green-900 text-center mt-4 animate-fade-in">
              Thank you! Your message has been sent. Redirecting to{" "}
              <a
                href="https://corbettjunglesafari.in"
                className="underline text-yellow-400"
              >
                corbettjunglesafari.in
              </a>
              ...
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-center mt-4 animate-fade-in">
              Oops! Something went wrong. Please try again.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;