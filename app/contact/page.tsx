export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <div className="prose dark:prose-invert">
        <div className="space-y-4">
          <p className="text-lg">
            <span className="font-semibold">Contact:</span> Mitch Tingiris
          </p>
          <p className="text-lg">
            <span className="font-semibold">Email:</span>{' '}
            <a 
              href="mailto:alecstar@yahoo.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              alecstar@yahoo.com
            </a>
          </p>
          <div className="text-lg mt-6">
            <span className="font-semibold">Mailing Address:</span>
            <address className="not-italic mt-2">
              Alecstar<br />
              c/o Mitch Tingiris<br />
              PO Box 2751<br />
              Syracuse, NY 13220
            </address>
          </div>
        </div>
      </div>
    </div>
  )
} 