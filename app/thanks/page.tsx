export default function ThanksPage() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Special Thanks</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg mb-8">
          There are a few people who we would like to recognize for their contributions to this website and to the 
          making of our CD and DVD. We never imagined that 20 years after we played our last gig as an active band 
          that we would release a CD and a DVD. We also would like to give a nod to some others that helped the band 
          during our years together.
        </p>

        <div className="space-y-6">
          {/* Key Contributors */}
          <section>
            <h2 className="text-2xl font-semibold">Key Contributors</h2>
            <ul className="list-none space-y-4">
              <li>
                <strong>Mitch Tingiris</strong> - The driving force behind our reunions, the website, the CD and DVD.
              </li>
              <li>
                <strong>Jeff Perillo</strong> - Former roadie who brought our website to life and designed artwork for our CD and DVD.
              </li>
              <li>
                <strong>Gordy Scibior</strong> - Provided financial support for the CD and refurbished the original Alecstar sign.
              </li>
              <li>
                <strong>Bill Hatch</strong> - Engineer who enhanced and transferred our historical videos to DVD format.
              </li>
            </ul>
          </section>

          {/* Technical Team */}
          <section>
            <h2 className="text-2xl font-semibold">Technical Team</h2>
            <ul className="list-none space-y-4">
              <li>
                <strong>Jim Barnes & Paul Baywall</strong> - Engineers at Tuffy's Barn who restored and digitized our master tapes.
              </li>
              <li>
                <strong>UVTV</strong> - Rich Stahle and crew who filmed at Turning Stone Casino.
              </li>
            </ul>
          </section>

          {/* Road Crew */}
          <section>
            <h2 className="text-2xl font-semibold">Road Crew</h2>
            <p>Special thanks to our road crews over the years, including Matt McDowell (manager), Phil Berrigan, 
            Mike Cook, Dave Seib, and many others who helped make our shows possible.</p>
          </section>

          {/* Radio Support */}
          <section>
            <h2 className="text-2xl font-semibold">Radio Support</h2>
            <p>Thanks to the radio stations and DJs who supported us, including Jerry Krause, Tom Starr, 
            Dave Fresina, Howie Castle, Tommy Nast, and many others.</p>
          </section>

          {/* Fans */}
          <section>
            <h2 className="text-2xl font-semibold">Our Fans</h2>
            <p>Most importantly, we want to thank our fans. Without you there is no us. 
            We are eternally grateful for your support and loyalty over the years.</p>
          </section>
        </div>

        <div className="mt-12">
          <p className="font-semibold">The Alecstar Band</p>
          <ul className="list-none">
            <li>George Mahoney</li>
            <li>Jack Murray</li>
            <li>Dick Murphy</li>
            <li>Harold Mantor</li>
            <li>Tim Sharp</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 