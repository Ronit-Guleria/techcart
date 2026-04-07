import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// 🔑 Replace these with your actual EmailJS credentials
const SERVICE_ID  = "service_n4rdh2w";
const TEMPLATE_ID = "template_vwx6u1h";
const PUBLIC_KEY  = "34VJgIkNGLvrVsCbB";

function ContactUs() {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", subject: "", message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValid = Object.values(formData).every((v) => v.trim() !== "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;

    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:  `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          subject:    formData.subject,
          message:    formData.message,
          reply_to:   formData.email,
        },
        PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });

      // Reset back to idle after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);

    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 dark:border-slate-700 dark:bg-slate-800 dark:text-white text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition";
  const labelClass = "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2";

  return (
    <section id="contact" className="w-full bg-gray-100 dark:bg-black py-16 md:py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-2xl md:text-4xl font-extrabold tracking-[0.2em] uppercase text-blue-900 dark:text-blue-400">
            Contact Us
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white leading-tight">
            We'd love to hear from you
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-300 leading-7">
            Have a question about products, orders, or support? Reach out to our
            team and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left - Info Cards */}
          <div className="space-y-6">
            <div className="bg-gray-200 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Customer Support
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-7">
                Our support team is here to help you with product details, order
                issues, returns, and general assistance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: "📧", label: "Email", value: "support@techcart.com", bg: "bg-blue-200 dark:bg-blue-900", text: "text-blue-600 dark:text-blue-300" },
                { icon: "📞", label: "Phone", value: "+91 98765 43210",       bg: "bg-orange-200 dark:bg-orange-900", text: "text-orange-500 dark:text-orange-300" },
                { icon: "📍", label: "Address", value: "21 Market Street, New Delhi, India", bg: "bg-blue-200 dark:bg-blue-900", text: "text-blue-600 dark:text-blue-300" },
                { icon: "⏰", label: "Working Hours", value: "Mon - Sat, 9:00 AM - 7:00 PM", bg: "bg-orange-200 dark:bg-orange-900", text: "text-orange-500 dark:text-orange-300" },
              ].map((item) => (
                <div key={item.label} className="bg-gray-200 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300">
                  <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.text} flex items-center justify-center text-2xl mb-4`}>
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{item.label}</h4>
                  <p className="mt-2 text-slate-600 dark:text-slate-300">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-gray-200 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-3xl shadow-sm p-8 md:p-10 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Send us a message
            </h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-7">
              Fill out the form below and our team will connect with you shortly.
            </p>

            {/* Success banner */}
            {status === "success" && (
              <div className="mt-5 flex items-center gap-3 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 text-green-700 dark:text-green-400 px-4 py-3 rounded-xl text-sm font-medium">
                ✅ Message sent! We'll get back to you soon.
              </div>
            )}

            {/* Error banner */}
            {status === "error" && (
              <div className="mt-5 flex items-center gap-3 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 text-red-700 dark:text-red-400 px-4 py-3 rounded-xl text-sm font-medium">
                ❌ Something went wrong. Please try again.
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>First Name</label>
                  <input
                    type="text" name="firstName" value={formData.firstName}
                    onChange={handleChange} placeholder="Enter your first name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Last Name</label>
                  <input
                    type="text" name="lastName" value={formData.lastName}
                    onChange={handleChange} placeholder="Enter your last name"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>Email Address</label>
                <input
                  type="email" name="email" value={formData.email}
                  onChange={handleChange} placeholder="Enter your email"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Subject</label>
                <input
                  type="text" name="subject" value={formData.subject}
                  onChange={handleChange} placeholder="Enter subject"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Message</label>
                <textarea
                  rows="5" name="message" value={formData.message}
                  onChange={handleChange} placeholder="Write your message here..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={!isValid || status === "sending"}
                className="w-full sm:w-auto bg-gray-800 hover:bg-orange-500 dark:bg-orange-500 dark:hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-medium transition duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === "sending" ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                    </svg>
                    Sending...
                  </span>
                ) : "Send Message"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactUs;