import React from 'react'
import "./Explore.css"
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Explore = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    
    const States =[
        {
            Img: "Images/Goa.jpg",
            Name: "Goa",
            Properties: "5,251",
            id: 1
        },
        {
            Img: "Images/Ooty.jpg",
            Name: "Ooty",
            Properties: "471",
            id: 2
        },
        {
            Img: "Images/Mumbai.jpg",
            Name: "Mumbai",
            Properties: "1,652",
            id: 3
        },
        {
            Img: "Images/NewDelhi.jpg",
            Name: "New Delhi",
            Properties: "2,919",
            id: 4
        },
        {
            Img: "Images/Banglore.jpg",
            Name: "Banglore",
            Properties: "2,044",
            id: 5
        },
        {
            Img: "Images/Munnar.jpg",
            Name: "Munnar",
            Properties: "512",
            id: 6
        },
        {
            Img: "Images/Lonavala.jpg",
            Name: "Lonavala",
            Properties: "751",
            id: 7
        },
        {
            Img: "Images/Rishikesh.jpg",
            Name: "Rishikesh",
            Properties: "480",
            id: 8
        },
        {
            Img: "Images/NorthGoa.jpg",
            Name: "North Goa",
            Properties: "3,909",
            id: 9
        },
        {
            Img: "Images/Manali.jpg",
            Name: "Manali",
            Properties: "874",
            id: 10
        },
        {
            Img: "Images/Cochin.jpg",
            Name: "Cochin",
            Properties: "956",
            id: 11
        } ,
        {
            Img: "Images/Vagamon.jpg",
            Name: "Vagamon",
            Properties: "131",
            id: 12
        },
        {
            Img: "Images/Varkala.jpg",
            Name: "Varkala",
            Properties: "297",
            id: 13
        }

    ]

        const handleNextClick = () => {
            setCurrentIndex(prevIndex =>
                prevIndex === States.length - 6 ? 0 : prevIndex + 1
            );
        };
    
        const handlePrevClick = () => {
            setCurrentIndex(prevIndex =>
                prevIndex === 0 ? States.length - 6 : prevIndex - 1
            );
        };
    

    return (
        <>
            <div className="Explore">
                <div className="ExploreContainer">
                    <div className="ExploreTitle">Explore India</div>
                    <div className="ExploreHeading">These popular destinations have a lot to offer</div>
                    <div className="EStates">
                        <div className="StateBtn1" onClick={handlePrevClick}>
                            <FontAwesomeIcon icon={faChevronLeft}  />
                        </div>
                        <div className="StateContainer">
                            {States.slice(currentIndex, currentIndex + 6).map((state, index)  => (
                                    <div className="StateItem" key={state.id}>
                                        <div className="StateImg">
                                            <img src={state.Img} alt={state.Name} />
                                        </div>
                                        <div className="StateName">{state.Name}</div>
                                        <div className="StateProperties">{state.Properties} properties</div>
                                    </div>
                                )
                            )}
                        </div>
                        <div className="StateBtn2"  onClick={handleNextClick}  >
                            <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


export default Explore
