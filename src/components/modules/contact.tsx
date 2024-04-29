export default function Contact() {
  return (
    <section className="page-width  ">
      <div className="flex justify-between items-center bg-custom-black px-16 py-20 rounded-xl mb-10">
        <div className="flex-1 max-w-[48%]">
          <h2 className=" text-custom-white mb-6">Book a call with me</h2>
          <p className=" text-custom-white">
            I’d love to have a chat to see how I can help you. The best first
            step is for us to discuss your project during a free consultation.
            Then we can move forward from there.
          </p>
        </div>

        <a href="/" className="btn-primary mr-8">
          Free Consultation
        </a>
      </div>
    </section>
  )
}
