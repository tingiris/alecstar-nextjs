import { ProductCard } from '../components/ProductCard'

const products = [
  {
    title: "Alecstar DVD",
    description: "Live performances and behind-the-scenes footage of Alecstar. A must-have for fans!",
    price: "$19.99",
    imageUrl: "/images/gallery/dvd-cover-for-print.jpg", // Adjust this path to your actual DVD cover image
    purchaseUrl: "https://www.ebay.com/placeholder-link" // Replace with actual eBay listing URL
  }
]

export default function MerchandisePage() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Merchandise</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.title}
            {...product}
          />
        ))}
      </div>
    </div>
  )
} 