export default function Products() {

  const sections = [
    {
      title: "Phones & Accessories",
      items: [
        { id: 1, image: "/download (1).jpg", name: "iPhone Pro", price: "$999" },
        { id: 2, image: "/download (2).jpg", name: "iPhone Air", price: "$799" },
        { id: 2, image: "/download (2).jpg", name: "iPhone Air", price: "$799" },
        { id: 2, image: "/download (2).jpg", name: "iPhone Air", price: "$799" },
        { id: 2, image: "/download (2).jpg", name: "iPhone Air", price: "$799" },
      ],
    },
    {
      title: "Screens & Monitors",
      items: [
         { id: 2, image: "/download (2).jpg", name: "iPhone Air", price: "$799" },
         { id: 2, image: "/download (2).jpg", name: "iPhone Air", price: "$799" },
         { id: 2, image: "/download (2).jpg", name: "iPhone Air", price: "$799" },
         { id: 2, image: "/download (2).jpg", name: "iPhone Air", price: "$799" },
         { id: 2, image: "/download (2).jpg", name: "iPhone Air", price: "$799" },
      ],
    },
    {
      title: "Laptops",
      items: [
        { id: 2, image: "/download (2).jpg", name: "iPhone Air", price: "$799" },
        { id: 2, image: "/download (2).jpg", name: "iPhone Air", price: "$799" },
        { id: 2, image: "/download (2).jpg", name: "iPhone Air", price: "$799" },
        { id: 2, image: "/download (2).jpg", name: "iPhone Air", price: "$799" },
        { id: 2, image: "/download (2).jpg", name: "iPhone Air", price: "$799" },
      ],
    },
    {
      title: "Keyboards & Mouse",
      items: [
       { id: 2, image: "/download (2).jpg", name: "iPhone Air", price: "$799" },
       { id: 2, image: "/download (2).jpg", name: "iPhone Air", price: "$799" },
       { id: 2, image: "/download (2).jpg", name: "iPhone Air", price: "$799" },
       { id: 2, image: "/download (2).jpg", name: "iPhone Air", price: "$799" },
       { id: 2, image: "/download (2).jpg", name: "iPhone Air", price: "$799" },
      ],
    },
    {
      title: "Solar Panels",
      items: [
        { id: 2, image: "/download (2).jpg", name: "iPhone Air", price: "$799" },
        { id: 2, image: "/download (2).jpg", name: "iPhone Air", price: "$799" },
        { id: 2, image: "/download (2).jpg", name: "iPhone Air", price: "$799" },
        { id: 2, image: "/download (2).jpg", name: "iPhone Air", price: "$799" },
        { id: 2, image: "/download (2).jpg", name: "iPhone Air", price: "$799" },
      ],
    },
    {
      title: "Inverters & Batteries",
      items: [
       { id: 2, image: "/download (2).jpg", name: "iPhone Air", price: "$799" },
       { id: 2, image: "/download (2).jpg", name: "iPhone Air", price: "$799" },
       { id: 2, image: "/download (2).jpg", name: "iPhone Air", price: "$799" },
       { id: 2, image: "/download (2).jpg", name: "iPhone Air", price: "$799" },
       { id: 2, image: "/download (2).jpg", name: "iPhone Air", price: "$799" },
      ],
    },
  ];

  return (
    <div className="py-10 px-4">

      {sections.map((section, index) => (
        <div key={index} className="mb-16">

          {/* Section Title */}
          <h2 className="text-3xl font-bold text-center mt-7 mb-8">
            {section.title}
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

            {section.items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition"
              >
                <div className="h-[250px]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-500">{item.price}</p>

                  <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg">
                    View Product
                  </button>
                </div>
              </div>
            ))}

          </div>

        </div>
      ))}

    </div>
  );
}

