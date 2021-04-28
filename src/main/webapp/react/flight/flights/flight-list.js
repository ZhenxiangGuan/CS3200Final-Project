// import flightService to talk to the server
import flightService from "./flight-service";
import passengerService, {findPassengerById} from "../passengers/passenger-service";
// import Link component to navigate
const {Link, useHistory, useParams} = window.ReactRouterDOM;

// import state management React hooks
const { useState, useEffect } = React


const FlightList = () => {
    const {passengerId} = useParams();
    const [flights, setFlights] = useState([]);
    const [passenger, setPassenger] = useState([]);
    const history = useHistory()
    useEffect(() => {
        findAllFlightsForPassenger(passengerId)
    }, []);
    useEffect(() => {
        findPassengerById(passengerId)
    }, []);
    const findAllFlightsForPassenger = (passengerId) =>
        flightService.findAllFlightsForPassenger(passengerId)
            .then(flights => setFlights(flights));
    const findPassengerById = (id) => passengerService.findPassengerById(id)
        .then(passenger => setPassenger(passenger));


    return (
        <div>
            <h2>Flight List
                {passenger &&
                <span> for {passenger.username}</span>}</h2>
            <button className="btn btn-primary"
                    onClick={() => history.push(`/passengers/${passengerId}/flights/new`)}>
                Add Flight
            </button>
            <button className="btn btn-primary"
                    onClick={() => history.push(`/passengers/`)}>
                View Passengers
            </button>
            <ul className="list-group">
                {
                    flights.map(flight =>  // in the <ul> tag
                        <li key={flight.id}>
                            <Link to={`/passengers/${passengerId}/flights/${flight.id}`}>
                                {flight.type},
                                {flight.capacity},
                                {flight.endurance}
                            </Link>
                            <Link to={`/passengers/${passengerId}/flights/${flight.id}/tickets`}>
                                <button className="btn btn-primary">
                                    Tickets
                                </button>
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}



export default FlightList;