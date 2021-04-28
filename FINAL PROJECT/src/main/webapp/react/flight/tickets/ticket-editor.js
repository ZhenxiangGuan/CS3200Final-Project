// import ticket-service so we can fetch a ticket
import ticketService from "./ticket-service"
// import React's hooks
const {useState, useEffect} = React;
// import flightParams to parse parameters from URL
const {useParams, useHistory} = window.ReactRouterDOM;

const TicketEditor = () => {
  // parse "id" from URL
  // as defined in URL pattern in index.js
  const {passengerId,flightId,id} = useParams();
  const [ticket, setTicket] = useState({});
  const history = useHistory();
  //onload
  useEffect(() => {
    debugger
    // only load the ticket by ID if the ID is not "new"
    if(id !== "new") {
      // find the ticket by their ID encoded from path
      findTicketById(id)
    }
  }, []);

  // handle Create button click to send ticket
  // to the server
  // then return to ticket list
  const createTicketForFlight = (flightId, ticket) =>
      ticketService.createTicketForFlight(flightId, ticket)
      .then(() => history.goBack());


  // fetch a single ticket using their ID
  // use ticket service's new findFlightById
  const findTicketById = (id) =>
      ticketService.findTicketById(id)
      // store ticket from server to local ticket state variable
      .then(ticket => setTicket(ticket));

  // deleteTicket event handler accepts ticket's ID
  // invokes ticket service's deleteUse passing ID
  // if successful, navigate back to ticket list
  const deleteTicket = (id) =>
      ticketService.deleteTicket(id)
      .then(() => history.goBack());

  // update ticket with ID with new ticket data
  // send new ticket to server
  // then go back to ticket list
  const updateTicket = (id, newTicket) =>
      ticketService.updateTicket(id, newTicket)
      .then(() => history.goBack());



  return (
      <div>
        <h2>Ticket Editor</h2>
          <button className="btn btn-primary"
                  onClick={() => history.push(`/passengers/${passengerId}/flights/${flightId}`)}>
              Edit flight
          </button><br/>
          <label>Id:</label>
          <input disabled value={ticket.id}/><br/>

        <label>Date(FORM:YYYY-MM-DD):</label>
        <input
            onChange={(e) =>
                setTicket(ticket =>
                    ({...ticket, date: e.target.value}))}
            value={ticket.date}/><br/>

        <label>FromWhere:</label>
        <input
            onChange={(e) =>
                setTicket(ticket =>
                    ({...ticket, fromWhere: e.target.value}))}
            value={ticket.fromWhere}/><br/>

        <label>Destination:</label>
        <input
            onChange={(e) =>
                setTicket(ticket =>
                    ({...ticket, destination: e.target.value}))}
            value={ticket.destination}/><br/>

        <label>Seat:</label>
        <input
            onChange={(e) =>
                setTicket(ticket =>
                    ({...ticket, seat: e.target.value}))}
            value={ticket.seat}/><br/>

        <label>Flight Class:</label>
        <select
            onChange={(e)=>
                setTicket(ticket => ({...ticket, flightClass: e.target.value}))}
            value={ticket.flightClass}>
          <option>CHOOSE ONE</option>
          <option>FIRST</option>
          <option>ECONOMY</option>
          <option>BUSINESS</option>
        </select>
          <br/>

          <button className="btn btn-warning"
                  onClick={() => {history.goBack()}}>
              Cancel
          </button>
          <button className="btn btn-danger"
                  onClick={() => deleteTicket(ticket.id)}>
              Delete
          </button>
          <button className="btn btn-success"
                  onClick={() => createTicketForFlight(flightId, ticket)}>
              Create
          </button>
          <button className="btn btn-primary"
                  onClick={() => updateTicket(ticket.id, ticket)}>
              Save
          </button>
      </div>
  )
}

export default TicketEditor