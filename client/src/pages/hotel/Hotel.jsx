import "./hotel.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import { MailList } from "../../components/mailList/MailList"
import { Footer } from "../../components/footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const Hotel = () => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);
    const photos = [
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/287338615.jpg?k=055df208d06e74d852819f0ce4eba8903fd02efcaea500118dfbfe73ace5a17c&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/332968890.jpg?k=fdf5634bbc73254c9c463e5d03f7bd936075d9cfb95298c8170194a22a5c4790&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/287342768.jpg?k=e73d3e5a760e047111d0450bc332b77d9e76e26bd35abb8ea71707ead3a6837e&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/274754584.jpg?k=8eaa5db44a7dd70aefad1f5b62c2d04c825d76d34c22d68aad418ca7abf4bafd&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/287341934.jpg?k=68d5e1e67bb4d9019d201b23044f8216fcf849b22cd7628a5e976cdecbad3685&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/287342473.jpg?k=3a7beb92f01ec6d4fb78d6cbfacbba85d85fd255e88908578eb24b8d88645b4b&o=&hp=1"
        }

    ]

    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    }

    const handleMove = (direction) => {
        let newSlideNumber;
        if(direction==="l"){
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1;
        }else{
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1;
        }
        setSlideNumber(newSlideNumber);
    }

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="hotelContainer">
                {open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
                    <div className="sliderWrapper">
                        <img src={photos[slideNumber].src} alt="" className="sliderImg" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow"/>
                </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Elton St 125 New york</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent location - 500m from center
                    </span>
                    <span className="hotelPriceHighlight">
                        Book a stay over $114 at this property and get a free airport taxi
                    </span>
                    <div className="hotelImages">
                        {photos.map((photo, i) => (
                            <div className="hotelImgWrapper">
                                <img
                                    onClick={() => handleOpen(i)}
                                    src={photo.src}
                                    alt=""
                                    className="hotelImg" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetaisTexts">
                            <h1 className="hotelTitle">You're eligible for a Genius discount at Dalat Maya Hotel! </h1>
                            <p className="hotelDesc">Featuring a bar, shared lounge and views of garden, Dalat Maya Hotel is located in Da Lat,
                                2.5 km from Lam Vien Square. Among the facilities of this property are a restaurant,
                                a 24-hour front desk and room service, along with free WiFi. The hotel features family rooms.
                                Xuan Huong Lake is 2.7 km from Dalat Maya Hotel, while Yersin Park Da Lat is 2.9 km away.
                                The nearest airport is Lien Khuong, 30 km from the accommodation,
                                and the property offers a paid airport shuttle service.</p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>Couples particularly like the location — they rated it 8.4 for a two-person trip.</span>
                            <h2>
                                <b>$945</b> (9 nights)
                            </h2>
                            <button>Reserve or Book Now</button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>
        </div>
    )
}

export default Hotel