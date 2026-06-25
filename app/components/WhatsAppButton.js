
"use client";
import { FaWhatsapp } from "react-icons/fa";


export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2348068911221?text=Hello%20GloTech,%20I'm%20interested%20in%20your%20products."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-3xl text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-green-600 animate-bounce"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-4xl" />
    </a>
  );
}