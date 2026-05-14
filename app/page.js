export default function HomePage() {
  return (
    <main className="min-h-screen bg-white pt-24 text-black">
      {/* Navbar */}
      <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-blue-600 px-4 py-4 text-white shadow-lg md:px-10 md:py-5">
        <h1 className="text-2xl font-bold">GLOTECH GLOBAL</h1>

        <ul className="hidden gap-8 font-semibold md:flex">
          <li className="cursor-pointer hover:text-gray-200">Home</li>
          <li className="cursor-pointer hover:text-gray-200">
            Computer-Accessories
          </li>
          <li className="cursor-pointer hover:text-gray-200">Solar-Items</li>
          <li className="cursor-pointer hover:text-gray-200">Location</li>
        </ul>
      </nav>

      {/* Split Hero Section */}
      <section className="grid min-h-screen grid-cols-1 md:grid-cols-2">
        {/* Computer Side */}
        <div
          className="relative flex items-center bg-fixed bg-cover bg-center px-6 py-16 md:px-14 md:py-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1600&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/75"></div>

          <div className="relative z-10 max-w-lg text-white">
            <p className="mb-4 text-lg font-bold uppercase tracking-widest text-blue-400">
              Computer
            </p>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
              POWER YOUR PERFORMANCE
            </h1>

            <p className="mb-8 text-lg text-gray-300">
              Explore high quality computers and accessories for gaming,
              office work and everyday use.
            </p>
          </div>
        </div>

        {/* Solar Side */}
        <div
          className="relative flex items-center bg-fixed bg-cover bg-center px-6 py-16 md:px-14 md:py-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-white/70"></div>

          <div className="relative z-10 max-w-lg text-gray-900">
            <p className="mb-4 text-lg font-bold uppercase tracking-widest text-blue-600">
              Solar
            </p>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
              POWER A BETTER TOMORROW
            </h1>

            <p className="mb-8 text-lg text-gray-700">
              Reliable solar solutions for homes, businesses and sustainable
              energy systems.
            </p>
          </div>
        </div>
      </section>

      {/* Middle Brand Circle */}
      <div className="relative z-20 -mt-16 flex justify-center md:-mt-20">
        <div className="flex h-32 w-32 items-center justify-center rounded-full border-8 border-white bg-white text-center shadow-2xl md:h-40 md:w-40">
          <h2 className="text-2xl font-extrabold text-blue-600">
            GLOTECH
            <br />
            GLOBAL
          </h2>
        </div>
      </div>

      {/* Features */}
      <section className="px-4 py-16 md:px-20 md:py-20">
        <h2 className="mb-4 text-center text-lg font-bold uppercase tracking-widest text-blue-600">
          Why Choose Us
        </h2>

        <h3 className="mb-14 text-center text-4xl font-bold">
          Reliable Products. Better Experience.
        </h3>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {[
            {
              title: 'Quality Assurance',
              text: '100% genuine and reliable products',
            },
            {
              title: 'Best Prices',
              text: 'Affordable prices for everyone',
            },
            {
              title: 'Warranty Support',
              text: 'Official warranty on products',
            },
            {
              title: 'Customer Satisfaction',
              text: 'Customers are our first priority',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-gray-100 p-8 shadow-md transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <h4 className="mb-3 text-2xl font-bold">{item.title}</h4>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
