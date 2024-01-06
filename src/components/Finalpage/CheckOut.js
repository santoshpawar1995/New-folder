// import React from "react"
// import "./CheckOut.css"



// const CheckOut = ({ CartItem, addToCart, decreaseQty }) => {
//   // Stpe: 7   calucate total of items
//   const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)

//   // prodcut qty total
//   return (
//     <>
//       {/* <section className='cart-items'>
//         <div className='container d_flex'> */}
//           {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

//           <div className='cart-details '>
//             {CartItem.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}

//             {/* yasma hami le cart item lai display garaaxa */}

//             {CartItem.map((item) => {
//               const productQty = item.price * item.qty

//               return (

//                 // main-container-manu 
//                 <div className='cart-list product d_flex' key={item.id}>
//                   <div className="image-cont-man">

//                     <div className="img-cont-2nd">
//                       <img src={item.cover} alt='' />
//                     </div>


//                   </div>
//                   <div className='cart-detail'>
//                     <h4 className="text-danger">{item.name}</h4>
//                     <h4 className="">

//                     <span className=" text-danger"> ${item.price}.00 * {item.qty}</span>


//                     </h4>
//                     <span className="product-quantity">${productQty}.00</span>
//                   </div>

//                   <div className='cart-items-function'>
//                     {/* <div className='removeCart'>
//                       <button className='removeCart'>
//                         <i className='fa-solid fa-xmark'></i>
//                       </button>
//                     </div> */}
//                     {/* stpe: 5 
//                     product ko qty lai inc ra des garne
//                     */}
//                     <div className='cartControl d_fle'>
//                       <button className='incCart' onClick={() => addToCart(item)}>
//                         <i className='fa-solid fa-plus'></i>
//                       </button>
//                       <button className='desCart' onClick={() => decreaseQty(item)}>
//                         <i className='fa-solid fa-minus'></i>
//                       </button>
//                     </div>
//                   </div>


//                   {/* <div className='cart-item-price'></div> */}
//                 </div>
//               )
//             })}

//           </div>

//           <div className='cart-total product'>
//             <h2>Cart Summary</h2>
//             <div className=' d_flex'>
//               <h4>Total Price :</h4>
//               <h3>${totalPrice}.00</h3>
//             </div>
//           </div>


//         {/* </div>

//       </section> */}


//       {/* started by me */}

//     </>
//   )
// }

// export default CheckOut


// new start from here

import React from 'react'


const CheckOut = ({ CartItem, addToCart, decreaseQty }) => {



    return (

        <>
            < h2 className='text-center' >
                Kindly pay the Amount and get Services from Us < h4 > We are happy to glad with you</h4 >
            </h2 >

            {CartItem.map((item) => {
                 <div className="img-cont-2nd">
                 <img src={item.cover} alt='' />
               </div>

            })}
        </>
    )
}


export default CheckOut;
