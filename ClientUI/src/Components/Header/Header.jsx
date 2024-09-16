import React, { useContext } from 'react'
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import { faBed, faPlane, faEarthAmericas, faCar, faTaxi, faCalendarDays, faUser, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import AttractionIcon from "/Svg/Attractions.svg"
import { SearchContext } from '../../context/SearchContext.jsx';

const Header = ({ type }) => {
    const [openDate, setopenDate] = useState(false)

    const [destination, setdestination] = useState("")
    
    const [openQuantity, setopenQuantity] = useState(false)

    const [Quantity, setQuantity] = useState({
        Adults: 2,
        Children: 0,
        Room: 1
    });

    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const handleQuantity = (name, operation) => {
        setQuantity((prev) => {
            return {
                ...prev, [name]: operation === "inc" ? Quantity[name] + 1 : Quantity[name] - 1,
            };
        });
    };

    const {dispatch} = useContext(SearchContext)

    const navigate = useNavigate()

    const handleSearch = ()=>{
        dispatch({type:"NEW_SEARCH", payload:{destination,dates,Quantity}})
        navigate("/hotels",{state:{destination,dates,Quantity}})
    }

    return (
        <div className='Header'>
            <div className="HeaderContainer">

                <div className="HeaderList">
                    <div className="HeaderItems active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="HeaderItems">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="HeaderItems">
                        <FontAwesomeIcon icon={faEarthAmericas} />
                        <span>Flight + Hotel</span>
                    </div>
                    <div className="HeaderItems">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rentals</span>
                    </div>
                    <div className="HeaderItems Attraction">
                    <img src={AttractionIcon} alt="" />
                        <span>Attractions</span>
                    </div>
                    <div className="HeaderItems">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport Taxis</span>
                    </div>
                </div>
                { type !== "ItemsList" &&
                    <>
                    <div className="HeaderText">
                        <div className="TextConatiner">
                            <div className="Title">Find your next stay</div>
                            <div className="Heading">Search low prices on hotels, homes and much more...</div>
                        </div>
                    </div>
                    <div className="HeaderSearch">
                        <div className="HeaderSearchItem">
                            <FontAwesomeIcon icon={faBed} className='HeaderSearchIcon' />
                            <input type="text" placeholder='Where are you going?' className='HeaderSearchInput' onChange={e=>setdestination(e.target.value)} />

                        </div>
                        <div className="HeaderSearchItem">
                            <FontAwesomeIcon onClick={() => { setopenDate(!openDate); setopenQuantity(openQuantity && !openDate ? false : openQuantity) }} icon={faCalendarDays} className='HeaderSearchIcon' />
                            <span onClick={() => { setopenDate(!openDate); setopenQuantity(openQuantity && !openDate ? false : openQuantity) }} className='HeaderSearchText'>{`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(dates[0].endDate, "dd/MM/yyyy")}`}</span>
                            {openDate && <DateRange
                                editableDateInputs={true}
                                onChange={item => setDates([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={dates}
                                className='date'
                            />}

                        </div>
                        <div className="HeaderSearchItem">
                            <FontAwesomeIcon icon={faUser} onClick={() => { setopenQuantity(!openQuantity); setopenDate(!openQuantity && openDate ? false : openDate) }} className='HeaderSearchIcon' />
                            <span className='HeaderSearchText' onClick={() => { setopenQuantity(!openQuantity); setopenDate(!openQuantity && openDate ? false : openDate) }}>{` ${Quantity.Adults} Adults · ${Quantity.Children} Children · ${Quantity.Room} Room `}</span>
                            <FontAwesomeIcon icon={faAngleDown} onClick={() => { setopenQuantity(!openQuantity); setopenDate(!openQuantity && openDate ? false : openDate) }} className='HeaderSearchIcon AngleDown' />
                            {openQuantity && <div className="Quantity">
                                <div className="QuantityList">
                                    <span className="QuantityText">Adults</span>
                                    <div className="QuantityBtn">

                                        <button className='QuantityDec' disabled={Quantity.Adults <= 1} onClick={() => handleQuantity("Adults", "dec")}>-</button>
                                        <span className="QuantityText">{Quantity.Adults}</span>
                                        <button className='QuantityInc' onClick={() => handleQuantity("Adults", "inc")}>+</button>
                                    </div>
                                </div>
                                <div className="QuantityList">
                                    <span className="QuantityText">Children</span>
                                    <div className="QuantityBtn">

                                        <button className='QuantityDec' disabled={Quantity.Children <= 0} onClick={() => handleQuantity("Children", "dec")}>-</button>
                                        <span className="QuantityText">{Quantity.Children}</span>
                                        <button className='QuantityInc' onClick={() => handleQuantity("Children", "inc")}>+</button>
                                    </div>
                                </div>
                                <div className="QuantityList">
                                    <span className="QuantityText">Room</span>
                                    <div className="QuantityBtn">

                                        <button className='QuantityDec' disabled={Quantity.Room <= 1} onClick={() => handleQuantity("Room", "dec")}>-</button>
                                        <span className="QuantityText">{Quantity.Room}</span>
                                        <button className='QuantityInc' onClick={() => handleQuantity("Room", "inc")}>+</button>
                                    </div>
                                </div>
                                <hr />
                                <div className="DoneBtn" onClick={() => setopenQuantity(!openQuantity)}>Done</div>
                            </div>}
                    </div>
                    <div className="SearchBtn" onClick={handleSearch}>
                        <button className='HeaderSearchBtn'>Search</button>
                    </div>
                </div> </>}
            </div>

        </div>
    )
}

export default Header
