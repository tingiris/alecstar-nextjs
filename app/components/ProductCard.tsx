import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  title: string
  description: string
  price: string
  imageUrl: string
  purchaseUrl: string
}

export function ProductCard({ title, description, price, imageUrl, purchaseUrl }: ProductCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg bg-white dark:bg-neutral-800">
      <div className="relative h-[300px]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">{price}</span>
          <Link
            href={purchaseUrl}
            target="_blank"
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded"
          >
            Buy on eBay
          </Link>
        </div>
      </div>
    </div>
  )
} 