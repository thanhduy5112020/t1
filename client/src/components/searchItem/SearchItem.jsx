import "./searchItem.css"

export const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/213109782.webp?k=88084104c43cb4ab79a1cda481ebb81bb70fc19e699153e4ea7019c2bc9e79e3&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Can Tho Ecolodge</h1>
        <span className="siDistance">6.9 km from centre</span>
        <span className="siTaxiOp">Travel Sustainable property</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire stuidio - 1 bathroom - 1 full bed
        </span>
        <div className="siCancelOp">Free cancellation</div>
        <div className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </div>

      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$123</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  )
}
