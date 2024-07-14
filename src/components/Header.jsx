import { Link } from "react-router-dom"
import { useOnlineStatus } from "../../Utils/useOnlineStatus"
import { useContext } from "react";
import userContext from "../../Utils/userContext";
import { useSelector } from "react-redux";
import shoppie from "../assets/shoppie.png"

const Header = ()=>{
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(userContext);
  const cartItem = useSelector((store)=>store.cart.items)  // we are subscribing the store using selector
  console.log(cartItem);
  //console.log(data);
  return(
      <>
         <nav className='flex items-center justify-between p-5 bg-pink-100 h-[100px] '>
          <Link to='/' className='flex items-center'>
          <div className="w-[90px] h-[90px]">
             <img src={shoppie} className=' w-full h-full'/>
          </div>
          <h2>Shoppie</h2>
          </Link>
          <div className="nav-links flex gap-7">
              <Link to='/'>Home</Link>
              <Link to='/about'>About</Link>
              <Link to='/contact'>Contact</Link>
              <div className='status'>
                {
                  onlineStatus ? (<div className='status flex items-center gap-2'>
                    <h4>Online</h4>
                    <div className='green w-[20px] h-[20px] rounded-full bg-green-500'>✔</div>
                  </div>):(
                    <div className='status'>
                      <h4>Offline</h4>
                      <div className='red w-[20px] h-[20px] rounded-full bg-red-500'>😢</div>
                    </div>
                  )
                }
              </div>
              <Link to='/cart' className='font-bold'>Cart- {cartItem.length} items</Link>
          </div>
         </nav>
      </>
  )
}
export default Header