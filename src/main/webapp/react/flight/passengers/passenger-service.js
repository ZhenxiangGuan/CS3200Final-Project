const PASSENGERS_URL = "http://localhost:8080/api/passengers"

// retrieve all passengers from the server
export const findAllPassengers = () => fetch(PASSENGERS_URL)
  //parse response from server
  .then(response => response.json());

// retrieve a single passenger by their ID
export const findPassengerById = (id) => fetch(`${PASSENGERS_URL}/${id}`)
  .then(response => response.json());

// delete a passenger by their ID
//deleteUser function accepts passenger's ID
export const deletePassenger = (id) => fetch(`${PASSENGERS_URL}/${id}`, {method: "DELETE"});

// create a new passenger
export const createPassenger = (passenger) =>
    fetch(PASSENGERS_URL, {
      method: 'POST',
      body: JSON.stringify(passenger),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json());


// update a passenger by their ID
export const updatePassenger = (id, passenger) =>
    fetch(`${PASSENGERS_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(passenger),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json());




// export all functions as the API to this service
export default {
  // export functions in this file for others to import
  findAllPassengers,

  // export this function for others to import
  findPassengerById,

  // export method for others to import
  deletePassenger,

  // export so others can import
  createPassenger,

  // export for others to import
  updatePassenger
}
