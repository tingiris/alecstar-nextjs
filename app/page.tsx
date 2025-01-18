import Image from 'next/image'

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full aspect-[16/9] mb-16">
        <Image
          src="/images/alecstarphoto.jpg"
          alt="Alecstar"
          fill
          priority
          className="object-cover rounded-lg"
        />
      </div>

      {/* Existing content */}
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Forward</h1>
        
        <div className="prose dark:prose-invert max-w-none space-y-6">
          <p>
            I have to say that when they write the book about Central New York Rock Bands,
            Alecstar would have to be in chapter one and not just because they start with
            the letter "A"! To hold up musically today after all these years is an
            accomplishment in itself. And I'm also talking about the guys themselves! With
            all the crazy partying in the late 70's and the early 80's, these guys are still
            rockin'.
          </p>

          <p>
            The first Turning Stone Casino concert in May 2003 was classic Alecstar. It was like seeing the
            group in a time-warp from the Rustic Inn in 1979, or at Hot Rocks in 1981. Forget
            Dick Clark, we all know George Mahoney drinks daily from the Fountain of Youth
            and Jack, Dick, Harry and Tim have all remained rockers in the truest sense. The
            reunions we have witnessed are not about a bunch of retreads dusting off their gear
            for a trip down memory lane. They are Alecstar show's that can stand up against
            any show they did from back in the 80's.
          </p>

          <p>
            When the talk around here turns to local bands past and present,
            along with their impact and skill, I always bring up the wild era of the late 70's and early 80's bands.
            How the musicianship and songwriting were key factors. The look and the
            presentation were also two prime ingredients to a bands "identity". While
            sometimes that is either lost or lacking today, we have memories of bands like Alecstar to remind us of
            the golden age of local rock. They represent Central New York's finest, and they can stand up against any group of their era... in any city
            in the country! I was a fan first, and not long after became a friend. I have to
            say that these guys have put their stamp on the local music scene like no other
            band. They could out rock the others and have a crazy time doing it! Plus the
            dual lead guitar assault, that was a trademark of Alecstar, always wowed the
            crowds. (Harry & Dick... you guys rock!)
          </p>

          <p>
            I am looking forward to not only the Alecstar music that's coming out of the
            archives for their second CD, but any new tunes and any future reunions as well. Not
            only will we get to hear all those favorites again, we can watch them on the DVD that has footage that goes back to 1980! Damn, it's
            like stepping into a time machine when I start thinking about these guys! And
            don't forget their tunes that appeared on the WOUR 'Rock of Central New York'
            albums and CD's. 'Hold On To Rock & Roll', 'Give Me The Time To
            Change' and 'So Long To Hollywood' were all highlights of the local music that we compiled.
          </p>

          <p>
            Till we rock again. In the words of Alecstar... "Hold On To Rock and Roll"… I
            heard it on the radio - WOUR!
          </p>

          <div className="text-right mt-8 space-y-1">
            <p>The Doctor, Jerry Kraus</p>
            <p>WOUR 96.9 Announcer</p>
            <p>1978 - 2007</p>
          </div>

          <div className="mt-12 flex flex-col items-center space-y-4">
            <Image
              src="/images/gallery/docozzy81.jpg"
              alt="Jerry Kraus & Ozzy Osbourne 1981"
              width={450}
              height={444}
              className="rounded-lg"
            />
            <p className="text-center text-lg">Jerry Kraus & Ozzy Osbourne 1981</p>
          </div>
        </div>
      </div>
    </div>
  )
}