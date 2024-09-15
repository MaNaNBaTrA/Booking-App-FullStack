import React from 'react'
import "./Offers.css"

const Offers = () => {
  return (
    <>
    <div className="Offers">
        <div className="OfferContainer">
            <div className="OfferTitle">Offers</div>
            <div className="OfferHeading">Promotions, deals and special offers for you</div>
            <div className="Poster">
                <div className="Poster1">
                    <div className="PosterText">
                        <div className="PosterTitle1">Fly away to your dream holiday</div>
                        <div className="PosterHeading1">Get inspired, compare and book flights with more flexibility</div>
                        <div className="PosterBtn1">Search for flights</div>
                    </div>
                    <div className="PosterImg"><img src="Images/Flight.png" alt="" /></div>
                </div>
                <div className="Poster2">
                    <div className="PosterText">
                    <div className="PosterTitle2">Seize the moment</div>
                        <div className="PosterHeading2">Save 15% or more when you book and stay before 1 October 2024</div>
                        <div className="PosterBtn2">Find Getaway Deals</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Offers
