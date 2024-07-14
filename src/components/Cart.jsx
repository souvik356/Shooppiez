import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../../Utils/cartSlice";
import { useState } from 'react';
import Modal from "./Modal";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const [buy, setBuy] = useState(false);

  const handleHide = () => {
    setBuy(false);
  };

  return (
    <>
      <h1 className='font-bold text-xl text-center'>Cart</h1>
      <h1 className='text-center'>
        <button className='mt-4 mb-4 p-1.5 bg-pink-200 rounded-lg' onClick={handleClearCart}>Clear</button>
      </h1>
      <div className='w-full h-full p-4 flex items-center justify-center gap-8'>
        <div className='flex flex-col gap-5'>
          {
            cartItems.map((elem) => (
              <div key={elem.id} className='p-3 bg-zinc-200 w-[800px] flex items-center justify-between gap-4 text-center rounded-xl'>
                <img className='w-[290px] h-[240px]' src={elem.image} alt={elem.title} />
                <div className='flex flex-col items-center'>
                  <h4>{elem.title}</h4>
                  {elem.size && <p>Size: {elem.size}</p>}
                  <h4>${elem.price}</h4>
                </div>
                <button className='p-2.5 bg-pink-300 rounded-lg' onClick={() => handleRemove(elem.id)}>Remove</button>
              </div>
            ))
          }
        </div>
        <div className='flex flex-col gap-6 items-center justify-center rounded-lg w-[400px] h-[250px] bg-pink-200'>
          <p>{cartItems.length === 0 && 'Add Products in the bag 😋'}</p>
          <p>Total Price: $ {calculateTotalPrice()}</p>
          <button onClick={() => setBuy(!buy)} className='p-2 rounded-lg bg-zinc-200 mt-6'>Proceed to buy</button>
        </div>
      </div>
      {
        buy && (<Modal data={handleHide} />)
      }
    </>
  );
}

export default Cart;
