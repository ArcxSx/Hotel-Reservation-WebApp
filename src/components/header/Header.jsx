import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendarDays, faCar, faMapLocation, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import "./header.css"

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
                    <span>Car rentals</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faMapLocation} />
                    <span>Attractions</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport taxis</span>
                </div>
            </div>
            <h1 className="headerTitle">A lifetime of discounts? Its genius.</h1>
            <p className="headerDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque culpa beatae commodi veritatis odio asperiores laudantium, libero molestiae facere totam qui cumque alias, ipsam, error aspernatur soluta tempora harum doloribus.
            </p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed} className="headerIcon" />
                    <input type="text" placeholder="Where are you going?" className='headerSearchInput' />
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                    <span className="headerSearchText">Date to Date</span>
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed} className="headerIcon" />
                    <span className="headerSearchText">2 adults 2 children 1 room</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header