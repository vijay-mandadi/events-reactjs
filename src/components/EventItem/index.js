// Write your code here
import './index.css'

const EventItem = props => {
  const {item, changeStatus} = props
  const {imageUrl, name, location, registrationStatus} = item

  const onclick = () => {
    changeStatus(registrationStatus)
  }

  return (
    <li className="listitem">
      <button type="button" onClick={onclick} className="img-btn">
        <img src={imageUrl} alt="event" className="event-image" />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
