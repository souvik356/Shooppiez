import shoppie from '../assets/shoppie.png'
const About = () =>{
  return(
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="w-11/12 md:w-3/4 lg:w-1/2 bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
        <p className="text-lg mb-4">
          Welcome to our eCommerce store! We are dedicated to providing you with the best shopping experience possible. Our store offers a wide variety of products, ranging from the latest electronics to trendy fashion items. We believe in quality, affordability, and exceptional customer service.
        </p>
        <p className="text-lg mb-4">
          Our mission is to bring you the latest products at unbeatable prices. We source our products from trusted suppliers and ensure they meet our high standards of quality. Whether you're looking for the newest gadgets or the perfect outfit, you'll find it here.
        </p>
        <p className="text-lg mb-4">
          Customer satisfaction is our top priority. Our friendly and knowledgeable customer service team is always here to help you with any questions or concerns. We are committed to making your shopping experience as enjoyable and hassle-free as possible.
        </p>
        <p className="text-lg mb-4">
          Thank you for choosing our store. We look forward to serving you!
        </p>
        <div className="flex justify-center">
          <img src={shoppie} alt="Our Store" className="rounded-full shadow-md" />
        </div>
      </div>
    </div>
    </>
  )
}
export default About