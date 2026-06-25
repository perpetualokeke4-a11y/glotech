export default function HomePage() {
  return (
    <main 
      
       className="bg-gray-50 px-4 py-16 md:px-20 md:py-24">
        <div className="mb-14 text-center">
          <p className="mb-3 text-lg font-bold uppercase tracking-widest text-blue-600">
            Computer Accessories
          </p>

          <h2 className="text-black text-4xl font-extrabold md:text-5xl">
            Upgrade Your Setup
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Discover modern accessories designed for gaming, office work,
            content creation and everyday productivity.
          </p>
        </div>

        <div className="text-black grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: ' Keyboard',
              image:
                'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1200&auto=format&fit=crop',
              
            },
            {
              name: 'Wireless & wired Mouse',
              image:
                'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1200&auto=format&fit=crop',
              
            },
            {
              name: 'Gaming Headset',
              image:
                'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1200&auto=format&fit=crop',
              
            },
            {
              name: '4K Monitor',
              image:
                'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1200&auto=format&fit=crop',
              
            },
            {
              name: 'laptop batteries',
              image:
                'https://images.unsplash.com/photo-1721333089496-caee7da840c7?w=500&auto=format&fit=crop',
            }, 
            {
              name: 'Laptop charger',
              image:
                'https://media.istockphoto.com/id/605989924/photo/laptop-charger-cable.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ew1PEFBhOnyjQyub5VZqEH4oqEAy5Bqh-3-J3N7Jvj0=',
            },
            {
              name: 'Software CDs',
              image:
                'https://media.istockphoto.com/id/529086033/photo/windows-95.jpg?s=612x612&w=0&k=20&c=4x-3Bc0uNWE1F_zQyce7qLt-8UJrptXO4PZg6r6X7aY=',
            },
            {
              name: 'Gaming Console',
              image:
                'https://media.istockphoto.com/id/1364374706/photo/joystick-wireless-controller-game-consoles-white-background.jpg?s=612x612&w=0&k=20&c=o-yq8D0i4mlDhsFz3exCZuToh17mkBWhSrFbHiIFLw4=',
            }

          ].map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-64 w-full object-cover transition duration-500 hover:scale-110"
                />
              </div>

              <div className="p-6">
  <h3 className="mb-4 text-2xl font-bold">
    {item.name}
  </h3>

  <a
    href={`https://wa.me/2348068911221?text=${encodeURIComponent(
      `Hello GloTech,

I'm interested in the ${item.name}.

Is it available? I'd like to know the price and more details.

Thank you.`
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full rounded-xl bg-green-600 px-5 py-3 text-center font-semibold text-white transition duration-300 hover:bg-green-700 hover:scale-105"
  >
    💬 Enquire on WhatsApp
  </a>
</div>
            </div>
          ))}
        
          </div>

      {/* Featured Brands */}
      <section className="bg-white px-4 py-16 md:px-20 md:py-24">
        <div className="mb-12 text-center">
          <p className="mb-3 text-lg font-bold uppercase tracking-widest text-blue-600">
            Trusted Brands
          </p>

          <h2 className="text-black text-4xl font-extrabold md:text-5xl">
            Top Technology Brands
          </h2>
        </div>

        <div className="text-blue-500 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {['HP', 'Dell', 'Lenovo', 'ASUS'].map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center rounded-3xl border border-gray-200 bg-gray-50 p-10 text-3xl font-bold shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              {brand}
            </div>
          ))}
        </div>
      </section>

      {/* Accessories Showcase */}
      <section className="relative overflow-hidden px-6 py-24 md:px-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop')",
          }}
        ></div>

        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
          <p className="mb-4 text-lg font-bold uppercase tracking-widest text-blue-400">
            Premium Accessories
          </p>

          <h2 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl">
            Build The Perfect Computer Setup
          </h2>

          <p className="mb-10 text-lg text-gray-300">
            From gaming keyboards to ultra-wide monitors, create a modern and
            productive workspace with premium accessories.
          </p>

        </div>
      </section>

      {/* Customer Reviews */}
      <section className="bg-gray-50 px-4 py-16 md:px-20 md:py-24">
        <div className="mb-14 text-center">
          <p className="mb-3 text-lg font-bold uppercase tracking-widest text-blue-600">
            Testimonials
          </p>

          <h2 className="text-black text-4xl font-extrabold md:text-5xl">
            What Customers Say
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            'Amazing quality products and fast delivery.',
            'The best place to buy computer accessories.',
            'Professional service and affordable prices.',
          ].map((review, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-8 shadow-lg"
            >
              <p className="mb-6 text-lg text-gray-600">“{review}”</p>

              <h4 className="text-black text-xl font-bold">Verified Customer</h4>
            </div>
          ))}
        </div>
      </section>
      {/* WhatsApp Contact */}
<section className="mt-20 rounded-3xl bg-gradient-to-r from-green-600 to-green-500 px-6 py-20 text-center text-white shadow-2xl">

  <p className="mb-3 text-lg font-bold uppercase tracking-widest text-green-100">
    Need Help?
  </p>

  <h2 className="mb-6 text-4xl font-extrabold md:text-5xl">
    Chat With Our Team
  </h2>

  <p className="mx-auto mb-10 max-w-3xl text-lg text-green-100">
    Have questions about any computer accessory or can't find the product
    you're looking for? Our team is ready to help you on WhatsApp.
  </p>

  <a
    href="https://wa.me/2348068911221?text=Hello%20GloTech,%20I%20would%20like%20to%20make%20an%20enquiry."
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center rounded-2xl bg-white px-8 py-4 text-lg font-bold text-green-700 shadow-lg transition duration-300 hover:scale-105 hover:bg-green-100"
  >
    💬 Chat on WhatsApp
  </a>

</section>


    </main>
  );
}
