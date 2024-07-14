import { useParams } from 'react-router-dom';
import { useProduct } from '../../Utils/useProduct';
import { useDispatch } from 'react-redux';
import { addItem } from '../../Utils/cartSlice';
import data from '../../Utils/RatingsData';
import { useState, useEffect } from 'react';
import user from '../assets/userLogo.png';
import Shimmer2 from './Shimmer2';

const Product = () => {
  const { prodId } = useParams();
  console.log(prodId);
  const prodInfo = useProduct(prodId); // useProduct - CustomHooks
  const dispatch = useDispatch();
  const [size, setSize] = useState(''); // State for selected size

  const handleAddItem = (prodInfo) => {
    if (!size && (prodInfo.category === "men's clothing" || prodInfo.category === "women's clothing")) {
      alert('Please select a size');
      return;
    }
    dispatch(addItem({ ...prodInfo, size }));
  };

  const [review, setReview] = useState([]);

  useEffect(() => {
    const product = data.find((item) => item.id === parseInt(prodId));
    if (product) {
      setReview(product.reviews);
    }
  }, [prodId]);

  if (prodInfo == null) {
    return <Shimmer2 />;
  }

  return (
    <>
      <div className="flex gap-[120px] items-center justify-center mt-4">
        {prodInfo && (
          <>
            <div className="w-[400px] h-[400px]">
              <img
                className="w-full h-full"
                src={prodInfo.image}
                alt={`${prodInfo.title} product image`}
              />
            </div>
            <div className="flex flex-col text-center w-[32rem] bg-pink-100 hover:bg-blue-200 gap-8 items-center justify-center rounded-xl p-4">
              <h2 className="text-2xl">{prodInfo.title}</h2>
              <p>{prodInfo.description}</p>
              <h2>Price: $ {prodInfo.price}</h2>
              <h2>Ratings: {prodInfo.rating.rate} stars</h2>

              {(prodInfo.category === "men's clothing" || prodInfo.category === "women's clothing") && (
                <div className="flex flex-col items-center gap-2">
                  <label className="text-lg">Select Size:</label>
                  <select
                    className="p-2 border rounded-lg"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                  >
                    <option value="">Select Size</option>
                    <option value="S">Small</option>
                    <option value="M">Medium</option>
                    <option value="L">Large</option>
                    <option value="XL">XL</option>
                  </select>
                </div>
              )}

              <button
                className="p-2 bg-zinc-400 rounded-lg hover:bg-blue-400 hover:text-white"
                onClick={() => handleAddItem(prodInfo)}
              >
                Add to Cart
              </button>
            </div>
          </>
        )}
      </div>
      <div className="p-4 flex items-center justify-center flex-col gap-4">
        <h1 className="text-2xl font-bold mb-4">Reviews</h1>
        <div className="w-full max-w-2xl p-4 rounded-lg flex flex-col gap-4 bg-white shadow-lg">
          {review.map((elem, id) => (
            <div
              key={id}
              className="w-full p-4 rounded-lg bg-gray-100 flex flex-col gap-2"
            >
              <div className="flex items-center gap-4">
                <img src={user} className="w-[40px] h-[40px] rounded-full" alt="User" />
                <div className="flex flex-col">
                  <h1 className="text-lg font-semibold">{elem.userName}</h1>
                  <h1 className="text-sm text-gray-600">{elem.rating} Rating</h1>
                </div>
              </div>
              <p className="text-gray-800 mt-2">{elem.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
