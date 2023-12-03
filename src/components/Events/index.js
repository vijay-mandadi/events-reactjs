import {Component} from 'react'
import EventItem from '../EventItem'
import './index.css'

const eventsList = [
  {
    id: 'f9bb2373-b80e-46b8-8219-f07217b9f3ce',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-canada-dance-festival-img.png',
    name: 'Canada Dance Festival',
    location: 'Canada, America',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'c0040497-e9cb-4873-baa9-ef5b994abfff',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kathakali-img.png',
    name: 'Puthanalkkal Kalavela',
    location: 'Karnataka, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '0037d5e4-4005-4030-987b-ce41b691b92a',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kuchipudi-img.png',
    name: 'Nithyopahara',
    location: 'Kerala, India',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
  {
    id: 'c9ff08cb-610c-4382-9939-78e5e50a72b2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-bharatanatyam-img.png',
    name: 'Shivam',
    location: 'Andhra Pradesh, India',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'd1153723-5b6e-4628-9a1a-ccd8f84f1273',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/events-kolatam-img.png',
    name: 'Janapada Kolatam',
    location: 'Tamil Nadu, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '7d6ec013-d0ae-4d84-b776-14b733a9174f',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-colonial-fest-img.png',
    name: 'Colonial Fest',
    location: 'Washington, America',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
]

const registrationStatus = {
  initial: 'INITIAL',
  registered: 'REGISTERED',
  yetToRegister: 'YET_TO_REGISTER',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

class Events extends Component {
  state = {status: registrationStatus.initial}

  renderInitial = () => (
    <p className="paragraph">
      Click on an event, to view its registration details
    </p>
  )

  changeStatus = status => {
    this.setState({status})
  }

  renderRegistered = () => (
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-image"
      />
      <h1 className="registered-para">
        You have already registered for the event
      </h1>
    </div>
  )

  renderRegistrationClosed = () => (
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="closed-image"
      />
      <h1 className="registered-para">Registrations Are Closed Now!</h1>
      <p className="reopen-para">
        Stay tuned. We will reopen registrations soon!
      </p>
    </div>
  )

  renderYetToRegister = () => (
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="closed-image"
      />
      <p className="registered-para">
        A live performance brings so much to your relationship with dance
      </p>
      <button type="button">Register Here</button>
    </div>
  )

  render() {
    const {status} = this.state
    let content
    switch (status) {
      case registrationStatus.initial:
        content = this.renderInitial()
        break
      case registrationStatus.registered:
        content = this.renderRegistered()
        break
      case registrationStatus.yetToRegister:
        content = this.renderYetToRegister()
        break
      case registrationStatus.registrationClosed:
        content = this.renderRegistrationClosed()
        break
      default:
        return null
    }
    return (
      <div className="bg-container">
        <div className="events-container">
          <h1 className="event-heading">Events</h1>
          <ul className="list-container">
            {eventsList.map(each => (
              <EventItem
                key={each.id}
                item={each}
                changeStatus={this.changeStatus}
              />
            ))}
          </ul>
        </div>
        <div className="status-container">{content}</div>
      </div>
    )
  }
}

export default Events
