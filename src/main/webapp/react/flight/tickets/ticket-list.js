// import ticketService to talk to the server
import ticketService from "./ticket-service";
import passengerService from "../passengers/passenger-service";
import flightService from "../flights/flight-service";
// import Link component to navigate
const {Link, useHistory, useParams} = window.ReactRouterDOM;

// import state management React hooks
const { useState, useEffect } = React




const TicketList = () => {
    const {passengerId,flightId} = useParams();
    const [tickets, setTickets] = useState([]);
    const [flight, setFlight] = useState([]);
    const [passenger, setPassenger] = useState([]);
    const history = useHistory();
  useEffect(() => {
    findAllTicketsForFlight(flightId)
  }, []);
  useEffect(() => {
    findFlightById(flightId)
  }, []);
  useEffect(() => {
    findPassengerById(passengerId)
  }, []);
  const findPassengerById = (id) => passengerService.findPassengerById(id)
      .then(passenger => {
        setPassenger(passenger)
      });
  const findAllTicketsForFlight = (flightId) => {
    ticketService.findAllTicketsForFlight(flightId)
    .then(tickets => {
      setTickets(tickets)
    });
  }
  const findFlightById = (id) => {
    debugger
    flightService.findFlightById(id)
    .then(flight => {
      setFlight(flight)
    });
  }


  return(
      <div>
          <h2>Ticket List
              {flight && <span> for <Link to={`/passengers/${passengerId}/flights/${flightId}`}>{flight.type}</Link></span>}</h2>
          <button className="btn btn-primary"
                  onClick={() => history.push(`/passengers/${passengerId}/flights/${flightId}/tickets/new`)}>
              Add Ticket
          </button>
          {passenger &&
          <button className="btn btn-primary"
                  onClick={() => history.push(`/passengers/${passengerId}/flights`)}>
              View flights for {passenger.username}
          </button>}

        <ul className="list-group">
          {
            tickets.map(ticket => 
                 <li key={ticket.id}>
                  <Link to={`/passengers/${passengerId}/flights/${flightId}/tickets/${ticket.id}`}>
                      {ticket.fromWhere},
                      {ticket.destination},
                      {ticket.seat}
                  </Link>
                </li>)
          }
        </ul>
      </div>
  )
}



export default TicketList;