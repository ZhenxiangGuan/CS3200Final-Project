// import flight-service so we can fetch a single flight
import flightService from "./flight-service"
// import React's hooks
const {useState, useEffect} = React;
// import flightParams to parse parameters from URL
const {useParams, useHistory} = window.ReactRouterDOM;

const FlightEditor = () => {
  // parse "id" from URL
  // as defined in URL pattern in index.js
  const history = useHistory()
  const {passengerId, id} = useParams();
  const [flight, setFlight] = useState({});
  //onload
  useEffect(() => {
    // only load the flight by ID if the ID is not "new"
    if(id !== "new") {
      // find the flight by their ID encoded from path
      findFlightById(id)
    }
  }, []);

  // handle Create button click to send flight
  // to the server
  // then return to flight list
  const createFlightForPassenger = (passengerId, flight) =>
      flightService.createFlightForPassenger(passengerId, flight)
      .then(() => history.goBack());


  // fetch a single flight using their ID
  // use flight service's new findFlightById
  const findFlightById = (id) =>
      flightService.findFlightById(id)
      // store flight from server to local flight state variable
      .then(flight => setFlight(flight));

  // deleteFlight event handler accepts flight's ID
  // invokes flight service's deleteUse passing ID
  // if successful, navigate back to flight list
  const deleteFlight = (id) =>
      flightService.deleteFlight(id)
      .then(() => history.goBack());

  // update flight with ID with new flight data
  // send new flight to server
  // then go back to flight list
  const updateFlight = (id, newFlight) =>
      flightService.updateFlight(id, newFlight)
      .then(() => history.goBack());


  return (
      <div>
        <h2>Flight Editor</h2>

        <label>Id</label>
        <input disabled value={flight.id}/><br/>

        <label>Type</label>
        <input
            onChange={(e) =>
                setFlight(flight =>
                    ({...flight, type: e.target.value}))}
            value={flight.type}/><br/>

        <label>Capacity</label>
        <input
            onChange={(e) =>
                setFlight(flight =>
                    ({...flight, capacity: e.target.value}))}
            value={flight.capacity}/><br/>

        <label>Endurance</label>
        <input
            onChange={(e) =>
                setFlight(flight =>
                    ({...flight, endurance: e.target.value}))}
            value={flight.endurance}/><br/>

          <button className="btn btn-warning"
                  onClick={() => {
                      history.goBack()
                  }}>
              Cancel
          </button>
          <button className="btn btn-danger"
                  onClick={() => deleteFlight(flight.id)}>
              Delete
          </button>
          <button className="btn btn-success"
                  onClick={() => createFlightForPassenger(passengerId, flight)}>
              Create
          </button>
          <button className="btn btn-primary"
                  onClick={() => updateFlight(flight.id, flight)}>
              Save
          </button>
      </div>
  )
}

export default FlightEditor