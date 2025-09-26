"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Phone, CircleHelp, ChevronDown } from "lucide-react";
import Header from "../../../components/header";
import Footer from "../../../components/footer";

const ContactPageContent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceID = "service_fd0uze6";
    const templateID = "template_1soga3i";
    const userID = "X-WXlO9pn6PeoWpc3";

    emailjs.send(serviceID, templateID, formData as any, userID).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      },
      (err) => {
        console.error("EMAILJS FAILED...", err);
        alert("Failed to send message. Please check the console for details.");
      }
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main 
        className="flex-grow flex items-center justify-center pt-20 pb-15"
        style={{
          backgroundImage: "url('/bg-kotak.png')",
          backgroundColor: 'white',
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          backgroundPosition: "0 0"
        }}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl lg:flex">
            {/* Left Side */}
            <div className="w-full lg:w-4/12 p-8 lg:p-12 text-white bg-blue-600 rounded-t-2xl lg:rounded-l-2xl lg:rounded-t-none">
              <h2 className="text-3xl font-bold mb-4">Let's Start a Conversation</h2>
              <p className="mb-6">
                I build practical web solutions and enjoy collaborating with teams. Have an idea or opportunity? I&apos;m happy to chat.
              </p>
              <p className="mb-6">
                I focus on user-centered development that delivers real results. Let&apos;s explore how I can help your project.
              </p>
              <div className="border-t border-blue-500 pt-6">
                <p className="font-semibold">What you can expect:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>A prompt and thoughtful response.</li>
                  <li>A collaborative and transparent approach.</li>
                  <li>A focus on quality and user-centric design.</li>
                </ul>
              </div>
            </div>

            {/* Right Side (Form) */}
            <div className="w-full lg:w-8/12 p-8 lg:p-12">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800">Get In Touch</h1>
                <p className="mt-3 text-gray-600">
                  Fill out the form below, and I'll get back to you as soon as possible.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-md placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-md placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  ></textarea>
                </div>

                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default function ContactPage() {
  return <ContactPageContent />;
}