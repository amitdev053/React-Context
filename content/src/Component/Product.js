import React, { useContext } from 'react'
import logo from '../logo.svg' 
import { AppContext } from '../context/ProductContext'
export const Product = () => {
  const {heading} = useContext(AppContext)
  return (
    <>
    <div className='container' style={{marginTop:"100px"}}>
    <div className="row">
            {/* Columns Started Here */}
{heading}
                <div className="col-md-3 col-sm-12 gallerycol" >
                  <div className="galleryimg position-relative">
                    <img src={logo} id="productimg" alt="" />
                    <span id="productprice" className="productprice">
                    500
                    </span>
                  </div>
                  <div className="mediacontent d-inline-block">
                    <p className="mb-1 totalgal">
                      4.5
                    </p>
                    <h4 className="gallerytitle productname" id="productname">
                     Title
                    </h4>
                    <div className="gallerytitle productname productdiscripation" id="productname">
                      Product Descripation
                    </div>
                    
                    <div className="p_btns mt-3">
                      <button
                        className="btn btn-sm btn-primary p_s_btn  mr-1 brand_button"
                       
                      >
                        Cart

                        <i className="fa-solid fa-cart-plus icon_margin"></i>
                      </button>
                      <button className="btn btn-sm btn-primary p_s_btn brand_button ">
                        Save<i className="fa-solid fa-arrow-up-right-from-square icon_margin"></i>
                      </button>
                    </div>
                  </div>
                </div>
           
            {/* Columns End Upon the div Here */}
            
          </div>
     
    </div>

    </>
  )
}
