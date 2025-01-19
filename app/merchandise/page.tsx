import { ProductCard } from '../components/ProductCard'

const product = {
  title: "Alecstar DVD",
  description: "Contains 24 live performances spanning from the 1980s through the 1998 Vernon Downs show and 2003 Turning Stone reunion. Features both original Alecstar songs and classic cover performances.",
  price: "$8.00",
  imageUrl: "/images/dvd-cover-for-print.jpg",
  purchaseUrl: "https://www.ebay.com/itm/265113641867"
}

export default function MerchandisePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">DVD - 100% of the proceeds go to the Humane Society.</h1>
      <div className="mb-12">
        <ProductCard {...product} />
      </div>

      <div className="prose dark:prose-invert">
        <h2 className="text-2xl font-semibold mb-4">DVD Track Listing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <ol className="list-decimal list-inside space-y-2">
              {/* First 12 tracks */}
              <li>Someone Tonight</li>
              <li>Ramble On</li>
              <li>I Can't Say Goodbye</li>
              <li>No Cash</li>
              <li>Take It While You Can</li>
              <li>Can't Stop The Need</li>
              <li>Man Behind The Wheel</li>
              <li>Lightning Strikes</li>
              <li>Headin' Out To The Highway</li>
              <li>Pretty Women</li>
              <li>Too Late To Cry</li>
              <li>Highway Star</li>
            </ol>
          </div>
          <div>
            <ol className="list-decimal list-inside space-y-2" start={13}>
              {/* Tracks 13-24 */}
              <li>Paranoid</li>
              <li>Rockin' In The Streets</li>
              <li>Hold On To Rock & Roll</li>
              <li>Wheel Of Fortune</li>
              <li>Long Live Rock</li>
              <li>Long Dirt Road</li>
              <li>Living In Fear</li>
              <li>Standing In The Rain</li>
              <li>Taking It Over</li>
              <li>So Long To Hollywood</li>
              <li>Give Me The Time</li>
              <li>Money</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
} 