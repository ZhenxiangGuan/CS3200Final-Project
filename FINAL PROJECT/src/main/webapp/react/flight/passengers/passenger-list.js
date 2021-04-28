// import userService to talk to the server
import passengerService from "./passenger-service"
// import Link component to navigate
const {Link, useHistory} = window.ReactRouterDOM;

// import state management React hooks
const { useState, useEffect } = React


const PassengerList = () => {
  const history = useHistory();

  const [passengers, setPassenger] = useState([]) // create a users state variable
  useEffect(() => { findAllPassengers()}, []);

  const findAllPassengers = () =>  // local function findAllPassengers()

      // use UserService.findAllUsers() to retrieve users from server
      passengerService.findAllPassengers()

      //store them in local users state variable
      .then(passengers => setPassenger(passengers));



  return(
      <div>
        <h2>Passenger List</h2>
          <button className="btn btn-primary"
                  onClick={() => history.push("/passengers/new")}>
              Add Passenger
        </button>

        <ul className="list-group">
          {
            passengers.map(passenger =>  // in the <ul> tag
                <li key={passenger.id}>
                  <Link to={`/passengers/${passenger.id}`}>
                      {passenger.firstName},
                      {passenger.lastName},
                      {passenger.username}
                  </Link>
                    <Link to={`/passengers/${passenger.id}/flights`}>
                        <button className="btn btn-primary">
                            Flights
                        </button>
                    </Link>
                </li>
            )
          }

        </ul>
      </div>
  )
}


export default PassengerList
