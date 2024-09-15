import React from 'react'
import "./Deals.css"
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Deals = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const DHotels = [
        {
            Img: "HotelImages/1.jpg",
            Name: "Palette Kapashera formerly Calista Resort",
            Location: "New Delhi, India",
            Rating: "10.0",
            Remark: "Exceptional ·",
            Reviews: "18",
            InitialPrice:"₹ 5,778",
            FinalPrice:"₹ 1,907",
            id: 1
        },
        {
            Img: "HotelImages/2.jpg",
            Name: "Dev Mahal - A Boutique Heritage Hotel",
            Location: "Jaipur, India",
            Rating: "8.6",
            Remark: "Fabulous ·",
            Reviews: "143",
            InitialPrice:"₹ 12,000",
            FinalPrice:"₹ 7,440",
            id: 2
        },
        {
            Img: "HotelImages/3.jpg",
            Name: "Rove Downtown",
            Location: "Dubai, United Arab Emirates",
            Rating: "9.2",
            Remark: "Superb ·",
            Reviews: "11,368",
            InitialPrice:"₹ 14,454",
            FinalPrice:"₹ 9,395",
            id: 3
        },
        {
            Img: "HotelImages/4.jpg",
            Name: "Hotel Ambience -New Delhi",
            Location: "New Delhi, India",
            Rating: "8.4",
            Remark: "Very Good ·",
            Reviews: "19",
            InitialPrice:"₹ 6,998",
            FinalPrice:"₹ 2,799",
            id: 4
        },
        {
            Img: "HotelImages/5.jpg",
            Name: "Trim Boutique Parkota Haveli",
            Location: "Jaipur, India",
            Rating: "8.9",
            Remark: "Fabuluos ·",
            Reviews: "126",
            InitialPrice:"₹ 8,598",
            FinalPrice:"₹ 5,589",
            id: 5
        },
        {
            Img: "HotelImages/6.jpg",
            Name: "Rove City Centre, Deira",
            Location: "Dubai, United Arab Emirates",
            Rating: "9.2",
            Remark: "Superb ·",
            Reviews: "7,261",
            InitialPrice:"₹ 9,882",
            FinalPrice:"₹ 6,423",
            id: 6
        },
        {
            Img: "HotelImages/7.jpg",
            Name: "Hotel Aura - New Delhi Railway Station",
            Location: "New Delhi, India",
            Rating: "8.5",
            Remark: "Very Good ·",
            Reviews: "100",
            InitialPrice:"₹ 10,580",
            FinalPrice:"₹ 4,867",
            id: 7
        },
        {
            Img: "HotelImages/8.jpg",
            Name: "Nahargarh Haveli",
            Location: "Jaipur, India",
            Rating: "8.1",
            Remark: "Very Good ·",
            Reviews: "150",
            InitialPrice:"₹ 6,000",
            FinalPrice:"₹ 3,900",
            id: 8
        },
        {
            Img: "HotelImages/9.jpg",
            Name: "City Seasons Towers Hotel Bur Dubai",
            Location: "Dubai, United Arab Emirates",
            Rating: "7.6",
            Remark: "Good ·",
            Reviews: "6,871",
            InitialPrice:"₹ 7,560",
            FinalPrice:"₹ 6,426",
            id: 9
        },
        {
            Img: "HotelImages/10.jpg",
            Name: "Hotel Krishna Plaza New Delhi - 'Free Railway Station Pickup'",
            Location: "New Delhi, India",
            Rating: "9.0",
            Remark: "Superb ·",
            Reviews: "135",
            InitialPrice:"₹ 12,598",
            FinalPrice:"₹ 7,559",
            id: 10
        },
        {
            Img: "HotelImages/11.jpg",
            Name: "Laxmi Palace Heritage Boutique Hotel",
            Location: "Jaipur, India",
            Rating: "8.2",
            Remark: "Very Good ·",
            Reviews: "1,490",
            InitialPrice:"₹ 7,200",
            FinalPrice:"₹ 5,400",
            id: 11
        },
        {
            Img: "HotelImages/12.jpg",
            Name: "Ramada by Wyndham Dubai Barsha Heights",
            Location: "Dubai, United Arab Emirates",
            Rating: "8.5",
            Remark: "Very Good ·",
            Reviews: "3,760",
            InitialPrice:"₹ 7,262",
            FinalPrice:"₹ 5,954",
            id: 12
        }
    ]

    const handleNextClick = () => {
        setCurrentIndex(prevIndex =>
            prevIndex === DHotels.length - 6 ? 0 : prevIndex + 1
        );
    };

    const handlePrevClick = () => {
        setCurrentIndex(prevIndex =>
            prevIndex === 0 ? DHotels.length - 6 : prevIndex - 1
        );
    };



    return (
        <>
            <div className="Deals">
                <div className="DealsContainer">
                    <div className="DealsTitle">Deals for the weekend</div>
                    <div className="DealsHeading">Save on stays for 6 September - 8 September</div>
                    <div className="DHotel">
                        <div className="DHotelBtn1" onClick={handlePrevClick}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </div>
                        <div className="DHotelContainer">
                            {DHotels.slice(currentIndex, currentIndex + 4).map((hotel) => (
                                <div className="DealsItem" key={hotel.id}>
                                    <div className="DealImg">
                                        <img src={hotel.Img} alt={hotel.Name} />
                                    </div>
                                    <div className="DHotelText">

                                        <div className="DHotelName">{hotel.Name}</div>
                                        <div className="DHotelLocation">{hotel.Location}</div>
                                        <div className="DHotelRemarks">
                                            <div className="DHotelRating">{hotel.Rating}</div>
                                            <div className="DHotelRemark">{hotel.Remark}</div>
                                            <div className="DHotelReviews">{hotel.Reviews} reviews</div>
                                        </div>
                                        <div className="DHotelPrice">
                                            <div className="StayDuration">2 nights</div>
                                            <div className="InitialPrice">{hotel.InitialPrice}</div>
                                            <div className="FinalPrice">{hotel.FinalPrice}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                            )}
                        </div>
                        <div className="DHotelBtn2" onClick={handleNextClick}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Deals
