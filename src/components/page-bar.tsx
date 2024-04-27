import Image from 'next/image'

export default function PageBar() {
  return (
    <div className="page-width flex justify-between items-center py-8">
      <Image src="/logo.svg" alt="" width={64} height={64} />
      <a href="/" className="btn">
        Free Consultation
      </a>
    </div>
  )
}
