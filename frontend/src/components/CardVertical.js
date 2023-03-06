import React from 'react'
import { Link } from 'react-router-dom';

const CardVertical = ({ image, id , title ,category,price,sellPrice}) => {
  
  const priceIndia = price && price.toLocaleString("en-IN", {
    maximumFractionDigits: 0,
    style: "currency",
    currency: "INR",
  });

  const sellPriceIndia = sellPrice &&  sellPrice.toLocaleString("en-IN", {
    maximumFractionDigits: 0,
    style: "currency",
    currency: "INR",
  });

  const handleAddToCart = (e)=>{
    e.stopPropagation()
    e.preventDefault()
    // alert("hii")
  }
  return (
    <Link to={`/product/${id}`} onClick={()=>window.scrollTo({top : 0, behavior : "smooth"})}>
    <div className="w-full min-w-[280px] max-w-[280px]  shadow rounded bg-white-300  cursor-pointer  gap-1 flex flex-col my-1">
      <div className="min-w-[130px] min-h-[160px]  max-h-[160px]   bg-slate-200 h-full p-4 flex justify-center items-center">
        <img src={process.env.REACT_APP_SERVER_DOMAIN_GET_IMAGE + image} className="h-full max-w-[140px] max-h-[140px] mix-blend-multiply"/>
      </div>
      <div className="w-full flex flex-col gap-3 justify-center p-5">
      <h2 className="w-full font-medium text-slate-700 title text-lg my-0 min-h-[22px]">{title}</h2>
          <h2 className="w-full text-slate-500 capitalize my-0">{category}</h2>
          <h2 className="w-full rounded flex gap-3">
           <span className="text-red-600 font-medium">{sellPriceIndia} </span><span className="line-through text-slate-400">{priceIndia}</span>
          </h2>
          <button className="bg-red-600 hover:bg-red-700 text-white p-0.5 w-full rounded-full my-1" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
    </Link>
  )
}

export default CardVertical