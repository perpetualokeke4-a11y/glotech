import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export default function LocationPage() {
  return (
    <section className="bg-white">

      {/* HERO SECTION */}
      <div
        className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-cover bg-center px-6 text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-4xl text-white">

          <p className="mb-1 text-lg font-bold uppercase tracking-widest text-yellow-400">
            Visit Our Store
          </p>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            OUR LOCATION & CONTACT INFORMATION
          </h1>

          <p className="mx-auto max-w-3xl text-lg text-gray-300">
            Visit our office for premium computer accessories,
            solar products and professional installation services.
          </p>

        </div>
      </div>

      {/* CONTACT CARDS */}
      <section className="px-4 py-16 md:px-20 md:py-24">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">


          {/* PHONE */}
          <div className="rounded-3xl bg-white p-8 text-center shadow-lg transition hover:-translate-y-3 hover:shadow-2xl">

            <div className="mb-6 flex justify-center">
              <FaPhoneAlt className="text-6xl text-blue-600" />
            </div>

            <h2 className="mb-4 text-2xl font-bold">
              Phone
            </h2>

            <p className="text-gray-600 font-bold">
              +234 8068911221, +234 8131861215
            </p>

          </div>

          {/* EMAIL */}
          <div className="rounded-3xl bg-white p-8 text-center shadow-lg transition hover:-translate-y-3 hover:shadow-2xl">

            <div className="mb-6 flex justify-center">
              <FaEnvelope className="text-6xl text-yellow-500" />
            </div>

            <h2 className="mb-4 text-2xl font-bold">
              Email
            </h2>

            <p className="text-gray-600 font-bold">
              Glotechglobalresourceslimited@gmail.com
            </p>

          </div>

          {/* OPEN HOURS */}
          <div className="rounded-3xl bg-white p-8 text-center shadow-lg transition hover:-translate-y-3 hover:shadow-2xl">

            <div className="mb-6 flex justify-center">
              <FaClock className="text-6xl text-green-500" />
            </div>

            <h2 className="mb-4 text-2xl font-bold">
              Opening Hours
            </h2>

            <p className="text-gray-600 font-bold">
              Mon - Sat: 8AM - 6PM
            </p>

          </div>

        </div>
      </section>
      {/* BRANCH OFFICES */}
<section className="px-4 pb-16 md:px-20">

  <div className="mb-14 text-center">

    <p className="mb-3 text-lg font-bold uppercase tracking-widest text-blue-600">
      Our Branches
    </p>

    <h2 className="text-4xl text-black font-extrabold md:text-5xl">
      Visit Any Of Our Locations
    </h2>

  </div>

  <div className="grid gap-8 md:grid-cols-3">

    {/* CARD 1 */}
    <div className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-3 hover:shadow-2xl">

      <div className="mb-6 flex justify-center">
        <FaMapMarkerAlt className="text-6xl text-red-500" />
      </div>

      <h3 className="mb-4 text-center text-black text-2xl font-bold">
        Lagos Branch
      </h3>

      <p className="mb-3 text-center text-gray-600">
        F-Line F1376, Alaba International Market,
      </p>

      <p className="mb-3 text-center text-gray-600">
        Ojo, Lagos State
      </p>

      <p className="text-center text-gray-600">
        Nigeria
      </p>

    </div>

    {/* CARD 2 */}
    <div className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-3 hover:shadow-2xl">

      <div className="mb-6 flex justify-center">
        <FaMapMarkerAlt className="text-6xl text-blue-600" />
      </div>

      <h3 className="mb-4 text-center text-black text-2xl font-bold">
        First Abuja Branch
      </h3>

      <p className="mb-3 text-center text-gray-600">
        suite D shop 1 Power Plaza,
      </p>

      <p className="mb-3 text-center text-gray-600">
        Nyanya FCT, Abuja
      </p>

      <p className="text-center text-gray-600">
        Nigeria
      </p>

    </div>

    {/* CARD 3 */}
    <div className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-3 hover:shadow-2xl">

      <div className="mb-6 flex justify-center">
        <FaMapMarkerAlt className="text-6xl text-green-500" />
      </div>

      <h3 className="mb-4 text-center text-2xl text-black font-bold">
        Second Abuja Branch
      </h3>

      <p className="mb-3 text-center text-gray-600">
        Shop B35 Hert Plaza Mararaba Container,
      </p>

      <p className="text-center text-gray-600">
        Nasarawa State, Nigeria
      </p>

    </div>

  </div>

</section>

      {/* WHATSAPP CONTACT */}
<section className="bg-green-600 px-6 py-20 text-center text-white">

  <p className="mb-4 text-lg font-bold uppercase tracking-widest text-green-200">
    Need Help?
  </p>

  <h2 className="mb-6 text-4xl font-extrabold md:text-5xl">
    Chat With Us On WhatsApp
  </h2>

  <p className="mx-auto mb-10 max-w-3xl text-lg text-green-100">
    Have questions about our computer accessories, solar products or
    installation services? Our team is ready to assist you instantly on
    WhatsApp.
  </p>

  <a
    href="https://wa.me/2348068911221?text=Hello%20GloTech,%20I%20would%20like%20to%20make%20an%20enquiry."
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center rounded-2xl bg-white px-8 py-4 text-lg font-bold text-green-600 shadow-lg transition hover:scale-105 hover:bg-green-50"
  >
    💬 Chat on WhatsApp
  </a>

</section>
    </section>
  );
}