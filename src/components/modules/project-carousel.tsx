import Image from 'next/image'

const projectImages = [
  {
    alt: 'UI/UX',
    src: '/image-slide-1.jpg'
  },
  {
    alt: 'UI/UX',
    src: '/image-slide-2.jpg'
  },
  {
    alt: 'UI/UX',
    src: '/image-slide-3.jpg'
  },
  {
    alt: 'UI/UX',
    src: '/image-slide-4.jpg'
  },
  {
    alt: 'UI/UX',
    src: '/image-slide-5.jpg'
  }
]

export default function ProjectCarousel() {
  return (
    <section className="py-9 mb-52">
      <h3 className=" text-center text-2xl mb-14 font-bold text-custom-black">
        My work
      </h3>
      <div className="carousel carousel-end max-w-full space-x-4 bg-neutral bg-transparent">
        {/* <div className="carousel-item relative min-w-[540px] max-h-[360px]"></div> */}
        {projectImages.map((image, i) => {
          return (
            <div className="carousel-item" id="slide4">
              <Image
                key={i}
                src={image.src}
                alt={image.alt}
                width={540}
                height={360}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}
