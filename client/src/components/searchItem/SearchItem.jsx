import { Link } from "react-router-dom"
import "./searchItem.css"

export const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img
        src={item.photos[0]}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance} m from centre</span>
        <span className="siTaxiOp">Travel Sustainable property</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        {/* <span className="siFeatures">
          {item.desc}
        </span> */}
        <div className="siCancelOp">Free cancellation</div>
        <div className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </div>

      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`${item._id}`}>
            <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
