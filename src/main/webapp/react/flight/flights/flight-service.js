// declare URL where server listens for HTTP requests
const FLIGHTS_URL = "http://localhost:8080/api/flights"
const PASSENGERS_URL = "http://localhost:8080/api/passengers"
export const findAllFlights = () => fetch(FLIGHTS_URL)
    .then((response) => response.json());

export const findAllFlightsForPassenger = (passengerId) =>
    fetch(`${PASSENGERS_URL}/${passengerId}/flights`)
    .then(response => response.json());


//  retrieve a single flight by their ID
export const findFlightById = (id) =>
    fetch(`${FLIGHTS_URL}/${id}`)
        .then(response => response.json());



//  delete a flight by their ID
//deleteFlight function accepts flight's ID
export const deleteFlight = (id) =>
    fetch(`${FLIGHTS_URL}/${id}`, {
      method: "DELETE"
    });


//  create a new flight
export const createFlight = (flight) =>
    fetch(FLIGHTS_URL, {
      method: 'POST',
      body: JSON.stringify(flight),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())
export const createFlightForPassenger = (passengerId, flight) =>
    fetch(`${PASSENGERS_URL}/${passengerId}/flights`,
    {method: "POST",
        body: JSON.stringify(flight),
        headers: {'content-type':'application/json'}})
        .then(response => response.json());

//  update a flight by their ID
export const updateFlight = (id, flight) =>
    fetch(`${FLIGHTS_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(flight),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json());

export default {
    findAllFlights,
    findAllFlightsForPassenger,
    findFlightById,
    deleteFlight,
    createFlight,
    createFlightForPassenger,
    updateFlight
}
