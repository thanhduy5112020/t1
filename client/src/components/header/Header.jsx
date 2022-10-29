import "./header.css"
import { faBed, faPlane, faCar, faTaxi, faFaceLaugh, faCalendarDays, faPerson, faBuilding } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">

        <div className="headerList">

          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faFaceLaugh} />
            <span>Attractions</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxi</span>
          </div>

        </div>

        <h1 className="headerTitle">Enjoy Lifestyle Perks To Complement Your Stay</h1>

        <p className="headerDesc">We provide spaces for locals and travellers with comfort, convenience,
          and value for money without compromising on quality.</p>

        <button className="headerBtn">Sign in / Register</button>

        <div className="headerSearch">
          
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBuilding} className="headerIcon"/>
            <input type="text" placeholder="Where are you going?" className="headerSearchInput"/>
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
            <span className="headerSearchText">date to date</span>
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
            <span className="headerSearchText">2 adults 2 children 1 room</span>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Header