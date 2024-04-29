import Image from 'next/image'

export default function HeroGrid() {
  return (
    <section className="page-width py-11">
      <div className="text-center max-w-[81%] m-auto mb-20">
        <h1 className=" mb-6">Design solutions made easy</h1>
        <p className="m-auto text-custom-gray mx-32">
          With over ten years of experience in various design disciplines, I’m
          your one-stop shop for your design needs.
        </p>
      </div>
      <div className="grid grid-cols-6 min-h-[364px] gap-6">
        <div className="grid bg-custom-purple border row-span-2 col-span-2 rounded-lg p-6">
          <Image
            src="/pattern-graphic-design.svg"
            alt=""
            width={128}
            height={192}
            className='justify-self-end'
          />
          <p className="grid-title self-end">Graphic design</p>
        </div>
        <div className="grid bg-custom-orange border rounded-lg p-6">
          <Image
            src="/pattern-ui-ux.svg"
            alt=""
            width={64}
            height={64}
            className='justify-self-end'
          />
          <p className="grid-title self-end">UI/UX</p>
        </div>
        <div className="grid bg-custom-red border rounded-lg p-6">
          <Image
            src="/pattern-ui-ux.svg"
            alt=""
            width={64}
            height={64}
            className='justify-self-end'
          />
          <p className="grid-title self-end">Apps</p>
        </div>
        <div className="grid bg-custom-teal border col-span-2 rounded-lg p-6">
          <Image
            src="/pattern-photography.svg"
            alt=""
            width={160}
            height={64}
            className='justify-self-end'
          />
          <p className="grid-title self-end">Photography</p>
        </div>
        <div className="grid bg-custom-pink border col-span-2 rounded-lg p-6">
          <Image
            src="/pattern-illustrations.svg"
            alt=""
            width={128}
            height={192}
            className='justify-self-end'
          />
          <p className="grid-title self-end">Illustrations</p>
        </div>
        <div className="grid bg-custom-darkPurple border col-span-2 rounded-lg p-6">
          <Image
            src="/pattern-motion-graphics.svg"
            alt=""
            width={128}
            height={64}
            className='justify-self-end'
          />
          <p className="grid-title self-end">Motion Graphics</p>
        </div>
      </div>
    </section>
  )
}
