import { useContext } from "react";
import userContext from "../../Utils/userContext";

const Card = ({data})=>{
  const {image,title,price,description,rating,category} =data;
  // const {loggedInUser} = useContext(userContext);
  return(
      <>
       <div className="card w-[270px] h-[390px] bg-pink-100 flex flex-col items-center text-center p-5 rounded-lg hover:bg-blue-200"> 
          <img src={image}  className="photo w-[250px] h-[200px] rounded-lg"/>
          <h3 className='font-bold'>{title}</h3>
          <p>Category:-{category}</p>
          <h4> $ {price}</h4>
          <h4>{rating.rate} Rating</h4>
          {/* <h3>{loggedInUser}</h3> */}
          </div>
      </>
  )
}
export default Card