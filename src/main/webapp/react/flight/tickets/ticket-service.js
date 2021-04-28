// declare URL where server listens for HTTP requests
const TICKETS_URL = "http://localhost:8080/api/tickets"
const FLIGHTS_URL = "http://localhost:8080/api/flights"

export const findAllTickets = () => fetch(TICKETS_URL).then(response => response.json());

export const findAllTicketsForFlight = (flightId) => fetch(`${FLIGHTS_URL}/${flightId}/tickets`).then(response => response.json());

export const findTicketById = (id) => fetch(`${TICKETS_URL}/${id}`).then(response => response.json());

export const deleteTicket = (id) => fetch(`${TICKETS_URL}/${id}`, {method: "DELETE"});

export const createTicket = (ticket) => fetch(TICKETS_URL,
    {method: "POST",
        body: JSON.stringify(ticket),
        headers: {'content-type':'application/json'}}).then(response => response.json());

export const createTicketForFlight = (flightId, ticket) => fetch(`${FLIGHTS_URL}/${flightId}/tickets`,
    {method: "POST",
        body: JSON.stringify(ticket),
        headers: {'content-type':'application/json'}}).then(response => response.json());

export const updateTicket = (id, ticket) => fetch(`${TICKETS_URL}/${id}`,
    {method: "PUT",
        body: JSON.stringify(ticket),
        headers: {'content-type':'application/json'}}).then(response => response.json());

export default {
    findAllTickets,
    findAllTicketsForFlight,
    findTicketById,
    deleteTicket,
    createTicket,
    createTicketForFlight,
    updateTicket
}