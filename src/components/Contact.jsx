const Contact = ()=>{
  return(
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="w-11/12 md:w-3/4 lg:w-1/2 bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
        <p className="text-lg mb-4">
          We'd love to hear from you! Whether you have a question about our products, need assistance with an order, or just want to give us some feedback, feel free to reach out to us. Our team is here to help you.
        </p>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Name</label>
            <input type="text" className="p-2 border rounded-lg" placeholder="Your Name" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Email</label>
            <input type="email" className="p-2 border rounded-lg" placeholder="Your Email" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Message</label>
            <textarea className="p-2 border rounded-lg" rows="5" placeholder="Your Message"></textarea>
          </div>
          <button className="p-2 bg-blue-500 text-white rounded-lg">Send Message</button>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
          <p className="text-lg">Email: support@shoppie.com</p>
          <p className="text-lg">Phone: +91 8402062358</p>
          <p className="text-lg">Address: Mailasandra Kangeri Bengaluru , Karnataka</p>
        </div>
      </div>
    </div>
    </>
  )
}
export default Contact