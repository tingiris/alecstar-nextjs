import { ProductCard } from '../components/ProductCard'

const product = {
  title: "Alecstar DVD",
  description: "100% goes to the Humane Society ** ALECSTAR - Then and Now DVD NEW!!!",
  price: "$8.00",
  imageUrl: "/images/s-l500.webp",
  purchaseUrl: "https://www.ebay.com/itm/265113641867"
}

export default function MerchandisePage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">DVD</h1>
      <div className="flex justify-center">
        <ProductCard {...product} />
      </div>
    </div>
  )
} 