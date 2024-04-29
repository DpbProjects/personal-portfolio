import Image from 'next/image'

export default function Introduction() {
  return (
    <section className="page-width py-20">
      <div className='grid grid-cols-2'>
        <div className="relative h-[445px] w-[445px] rounded-full bg-custom-teal">
          <Image
            src="/image-amy.webp"
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className='flex flex-col justify-center'>
          <h2 className=' mb-9'>I’m Amy, and I’d love to work on your next project</h2>
          <p className='mb-8'>
            I love working with others to create beautiful design solutions.
            I’ve designed everything from brand illustrations to complete mobile
            apps. I’m also handy with a camera!
          </p>

          <a href="/" className="btn self-start">
            Free Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
