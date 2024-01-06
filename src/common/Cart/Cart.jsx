import React, { useState } from "react"
import "./style.css";

import { RxCross2 } from "react-icons/rx";




const Cart = ({ CartItem, addToCart, decreaseQty }) => {
  // Stpe: 7   calucate total of items
  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)

  const [modal, setModal] = useState(false)


  // prodcut qty total
  return (
    <>
      {/* <section className='cart-items'>
        <div className='container d_flex'> */}
      {/* if hamro cart ma kunai pani item xaina bhane no diplay */}




      <div className='cart-details ' style={{ marginLeft: 0 }}>
        {CartItem.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}

        {/* yasma hami le cart item lai display garaaxa */}

        {CartItem.map((item) => {
          const productQty = item.price * item.qty

          return (

            // main-container-manu 
            <div className='cart-list product d_flex ' style={{ marginLeft: 0 }} key={item.id}>
              {/* start model */}


              {/*    <h4 className="text-danger">{item.name}</h4>
                    <span className=" text-danger " style={{ fontWeight: "bold", fontSize: 20 }}> ${item.price}.00 * {item.qty} =</span>
                    <span className="text-danger" style={{ fontWeight: "bold", fontSize: 20 }}>${productQty}.00</span> */}



              {/* end model */}

              <div className="image-cont-man">

                <div className="img-cont-2nd">
                  <img src={item.cover} alt='' />
                </div>


              </div>
              <div className='cart-detail'>
                <h4 className="text-danger">{item.name}</h4>
                <h4 className="">

                  <span className=" text-danger"> ${item.price}.00 * {item.qty}</span>


                </h4>
                <span className="product-quantity">${productQty}.00</span>
              </div>

              <div className='cart-items-function'>
                {/* <div className='removeCart'>
                      <button className='removeCart'>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div> */}
                {/* stpe: 5 
                    product ko qty lai inc ra des garne
                    */}
                <div className='cartControl d_fle'>
                  <button className='incCart' onClick={() => addToCart(item)}>
                    <i className='fa-solid fa-plus'></i>
                  </button>
                  <button className='desCart' onClick={() => decreaseQty(item)}>
                    <i className='fa-solid fa-minus'></i>
                  </button>
                </div>
              </div>


              {/* <div className='cart-item-price'></div> */}
            </div>
          )
        })}

        {/* model start 2nd */}

        {
          modal ? <div className="text-center model-container" style={{ marginLeft: 0 }}>
            <div className="d-flex">
              <RxCross2 onClick={() => { setModal(false) }} style={{ marginLeft: 20, marginTop: 20, color: 'black', fontWeight: "bold" }} />
            </div>
            <div className="text-center">



              <span className="">
                <h4>Total Amount</h4>
                <h3 style={{ fontWeight: 'bold', color: 'green', fontSize: 24 }}>${totalPrice}.00</h3>
              </span>
              <div>
                <h2>Payment Method</h2>
                <h6> <span className="text-primary" style={{ fontWeight: 'bold' }}>BEP20 USDT :</span> 0x6bf8f7e3994d82131e9e4d2ef8cd6140a1b06a91</h6>
                <h6> <span className="text-primary" style={{ fontWeight: 'bold' }}>BITCOIN :</span> 1KMBU2bHwszpnP5kW3hbSWRQVqNNzQYEGx</h6>
                <h6> <span className="text-primary" style={{ fontWeight: 'bold' }}>BEP20 BNB :</span> 0x6bf8f7e3994d82131e9e4d2ef8cd6140a1b06a91</h6>

                <h5 className="text-danger">Note*:- After Payment done  Take a Screensort and send on Email with Transaction id</h5>
                <h4 className="text-danger">Email: <span className="text-primary">trustsoftware.admin@proton.me</span> </h4>
              </div>
            </div>
          </div>
            : null
        }
        {/* model end 2nd */}

      </div>



      <div className='cart-total product'>
        <h2>Cart Summary</h2>
        <div className=' d_flex'>
          <h4>Total Price :</h4>

          <div className="">
            <h3>${totalPrice}.00</h3>


            {/* {
                {totalPrice} <= 1 ? <a className="checkout">Checkout</a> : null
              } */}

            {/* <a className="checkout">Checkout</a> */}
            {
              totalPrice ? <a onClick={() => { setModal(true) }} className="checkout">Checkout</a> : null
            }


          </div>
        </div>
      </div>




      {/* </div>
      
      </section> */}




    </>
  )
}

export default Cart
