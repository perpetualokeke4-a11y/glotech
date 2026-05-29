import {
  FaSolarPanel,
  FaBatteryHalf,
  FaLightbulb,
  FaFan,
  FaBolt,
  FaSun,
  FaChargingStation,
  FaTools,
} from "react-icons/fa";

export default function SolarPage() {
  return (
    <section className="bg-white">

      {/* Hero Section */}
      <div
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cover bg-center px-6 text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 mx-auto max-w-5xl text-white">
          <p className="mb-4 text-lg font-bold uppercase tracking-widest text-yellow-400">
            Solar Energy Solutions
          </p>

          <h1 className="mb-6 text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            CLEAN ENERGY FOR HOMES & BUSINESSES
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-lg text-gray-300">
            Reliable solar products designed to provide stable electricity,
            reduce energy costs and power your future sustainably.
          </p>

        </div>
      </div>

      {/* Solar Categories */}
      <section className="px-4 py-16 md:px-20 md:py-24">

        <div className="mb-14 text-center">
          <p className="mb-3 text-lg font-bold uppercase tracking-widest text-blue-600">
            Solar Categories
          </p>

          <h2 className="text-4xl text-black font-extrabold md:text-5xl">
            Complete Solar Products
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {[
            {
              name: "Solar Panels",
              icon: (
                <FaSolarPanel className="text-6xl text-yellow-500" />
              ),
              desc: "High efficiency solar panels for homes and businesses.",
            },

            {
              name: "Solar Batteries",
              icon: (
                <FaBatteryHalf className="text-6xl text-blue-600" />
              ),
              desc: "Reliable batteries for storing solar energy.",
            },

            {
              name: "Solar Inverters",
              icon: (
                <FaBolt className="text-6xl text-orange-500" />
              ),
              desc: "Efficient power conversion systems.",
            },

            {
              name: "Charge Controllers",
              icon: (
                <FaChargingStation className="text-6xl text-green-500" />
              ),
              desc: "Protect and regulate your solar batteries.",
            },

            {
              name: "Solar Street Lights",
              icon: (
                <FaLightbulb className="text-6xl text-yellow-400" />
              ),
              desc: "Bright and energy-saving outdoor lighting.",
            },

            {
              name: "Solar Generators",
              icon: (
                <FaTools className="text-6xl text-blue-500" />
              ),
              desc: "Reliable backup power solutions powered by solar.",
            },

            {
              name: "Solar Fans",
              icon: (
                <FaFan className="text-6xl text-cyan-500" />
              ),
              desc: "Efficient cooling systems using solar energy.",
            },

            {
              name: "Mini Solar Panels",
              icon: (
                <FaSun className="text-6xl text-orange-400" />
              ),
              desc: "Compact solar panels for small-scale applications.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >

              {/* ICON */}
              <div className="mb-6 flex justify-center">
                {item.icon}
              </div>

              {/* PRODUCT NAME */}
              <h3 className="mb-4 text-center text-2xl font-bold text-black">
                {item.name}
              </h3>

              {/* DESCRIPTION */}
              <p className="mb-6 text-center text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Why Choose Solar */}
      <section className="bg-gray-50 px-4 py-16 md:px-20 md:py-24">

        <div className="mb-14 text-center">
          <p className="mb-3 text-lg font-bold uppercase tracking-widest text-yellow-500">
            Benefits
          </p>

          <h2 className="text-4xl text-black font-extrabold md:text-5xl">
            Why Solar Energy Is Better
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {[
            "Lower Electricity Bills",
            "24/7 Reliable Power",
            "Environment Friendly",
            "Long Lasting Systems",
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-8 text-center shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-black">
                {item}
              </h3>
            </div>
          ))}

        </div>
      </section>

    </section>
  );
}