"use client";

import { useState } from "react";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { X } from "lucide-react"; // Close icon

export const ContactSection = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-yellow-400/70 to-orange-400/80 text-stone-950 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-between w-full">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let’s connect and create something meaningful
              </h2>
              <p className="text-sm md:text-base mt-2">
                I’m open to exciting opportunities, creative collaborations, or
                even a thoughtful tech conversation. Don’t hesitate to get in
                touch!
              </p>
            </div>

            <div>
              <button
                onClick={() => setShowModal(true)}
                className="group text-white bg-stone-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 transition"
              >
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4 group-hover:animate-pulse-scale" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity px-2 sm:px-0"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white text-stone-900 rounded-2xl sm:p-6 p-4 w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl relative animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-semibold mb-6 text-center">
              Send me a message
            </h3>

            <form
              action="https://formsubmit.co/45426564ee6bdfdbf4bdf074aec08a93"
              method="POST"
              className="sm:space-y-6 space-y-4"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="New Contact Form Message"
              />

              <div className="relative">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder=""
                  className="peer w-full px-4 pt-6 pb-2 text-sm bg-white border border-gray-300 rounded-md focus:outline-none focus:border-stone-900"
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-2 text-gray-500 text-sm transition-all transform scale-100 origin-left 
              peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:scale-100
              peer-focus:top-1 peer-focus:text-sm peer-focus:text-stone-900 peer-focus:scale-90"
                >
                  Your Name
                </label>
              </div>

              <div className="relative">
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder=""
                  className="peer w-full px-4 pt-6 pb-2 text-sm bg-white border border-gray-300 rounded-md focus:outline-none focus:border-stone-900"
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-2 text-gray-500 text-sm transition-all transform scale-100 origin-left 
               peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:scale-100
               peer-focus:top-1 peer-focus:text-sm peer-focus:text-stone-900 peer-focus:scale-90"
                >
                  Your Email
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder=""
                  className="peer w-full px-4 pt-6 pb-2 text-sm bg-white border border-gray-300 rounded-md focus:outline-none focus:border-stone-900 resize-none"
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 top-2 text-gray-500 text-sm transition-all transform scale-100 origin-left 
               peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:scale-100
               peer-focus:top-1 peer-focus:text-sm peer-focus:text-stone-900 peer-focus:scale-90"
                >
                  Your Message
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-stone-900 text-white py-3 rounded-lg font-semibold hover:bg-stone-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
