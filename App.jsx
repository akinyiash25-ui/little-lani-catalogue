export default function LittleLaniCatalogueSite() {
  const products = [
    { name: 'Baby Shower Gift Box', price: 'KSh 2,500', tag: 'Best Seller' },
    { name: 'Birthday Surprise Box', price: 'KSh 3,000', tag: 'Popular' },
    { name: 'Thank You Gift Set', price: 'KSh 1,800', tag: 'Elegant' },
    { name: 'Just Because Hamper', price: 'KSh 2,200', tag: 'Sweet' },
  ];

  return (
    <div className="min-h-screen bg-[#F7F1EB] text-gray-800">
      <header className="px-6 py-10 text-center">
        <h1 className="text-4xl font-serif">Little Lani Gift Atelier</h1>
        <p className="mt-3 text-lg text-gray-600">Curated gifts made with love</p>
        <p className="mt-2 text-sm">For birthdays • baby showers • thank you gifts • just because</p>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-sm p-5 border border-[#EADFD5]">
              <div className="h-44 rounded-2xl bg-[#EFE4DA] mb-4 flex items-center justify-center text-sm text-gray-500">
                Product Photo
              </div>
              <span className="text-xs bg-[#F3E8DD] px-3 py-1 rounded-full">{item.tag}</span>
              <h3 className="mt-3 text-lg font-medium">{item.name}</h3>
              <p className="text-gray-600 mt-1">{item.price}</p>
              <button className="mt-4 w-full rounded-2xl bg-[#D9C2AD] py-3 text-sm font-medium hover:opacity-90">
                Order on WhatsApp
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-serif">How to Order</h2>
        <p className="mt-3 text-gray-600">Browse the catalogue, choose your favorite gift, then place your order directly via WhatsApp or Instagram DM.</p>
      </section>
    </div>
  );
}
