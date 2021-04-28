// import user-service so we can fetch a single user
import passengerService from "./passenger-service"
// import React's hooks
const {useState, useEffect} = React;
// import userParams to parse parameters from URL
const {useParams, useHistory} = window.ReactRouterDOM;

const PassengerEditor = () => {
      // parse "id" from URL
      // as defined in URL pattern in index.js
  const {id} = useParams()
  const history = useHistory()
  const [passenger, setPassenger] = useState({})
      //onload
      useEffect(() => {
            // only load the user by ID if the ID is not "new"
            if(id !== "new") {
                  // find the user by their ID encoded from path
                  findPassengerById(id)
            }
      }, []);

      // handle Create button click to send user
      // to the server
      // then return to user list
      const createPassenger = (passenger) =>
          passengerService.createPassenger(passenger)
          .then(() => history.goBack());


      // fetch a single user using their ID
      // use user service's new findUserById
      const findPassengerById = (id) =>
          passengerService.findPassengerById(id)
          // store user from server to local user state variable
          .then(passenger => setPassenger(passenger));

      // deleteUser event handler accepts user's ID
      // invokes user service's deleteUse passing ID
      // if successful, navigate back to user list
      const deletePassenger = (id) =>
          passengerService.deletePassenger(id)
          .then(() => history.goBack());

      // update user with ID with new user data
      // send new user to server
      // then go back to user list
      const updatePassenger = (id, newPassenger) =>
          passengerService.updatePassenger(id, newPassenger)
          .then(() => history.goBack());



      return (
          <div>
              <h2>Passenger Editor</h2>

                <label>Id:</label>
                <input disabled value={passenger.id}/><br/>

                <label>First Name:</label>
                <input
                    onChange={(e) =>
                        setPassenger(passenger =>
                            ({...passenger, firstName: e.target.value}))}
                    value={passenger.firstName}/><br/>

                <label>Last Name:</label>
                <input
                    onChange={(e) =>
                        setPassenger(passenger =>
                            ({...passenger, lastName: e.target.value}))}
                    value={passenger.lastName}/><br/>

                <label>Username:</label>
                <input
                    onChange={(e) =>
                        setPassenger(passenger =>
                            ({...passenger, username: e.target.value}))}
                    value={passenger.username}/><br/>

                <label>Password:</label>
                <input
                    onChange={(e) =>
                        setPassenger(passenger =>
                            ({...passenger, password: e.target.value}))}
                    value={passenger.password}/><br/>

                <label>Date of Birth:</label>
                <input type = "date"
                    onChange={(e) =>
                        setPassenger(passenger =>
                            ({...passenger, dateOfBirth: e.target.value}))}
                    value={passenger.dateOfBirth}/><br/>

                <label>Email:</label>
                <input
                    onChange={(e) =>
                        setPassenger(passenger =>
                            ({...passenger, email: e.target.value}))}
                    value={passenger.email}/><br/>

                <label>Phone:</label>
                <input
                    onChange={(e) =>
                        setPassenger(passenger =>
                            ({...passenger, phone: e.target.value}))}
                    value={passenger.phone}/><br/>

                <label>Passport Number:</label>
                <input
                    onChange={(e) =>
                        setPassenger(passenger =>
                            ({...passenger, passportNumber: e.target.value}))}
                    value={passenger.passportNumber}/><br/>

              <button className="btn btn-warning"
                      onClick={() => {history.goBack()}}>
                  Cancel
              </button>
              <button className="btn btn-danger"
                      onClick={() => deletePassenger(passenger.id)}>
                  Delete
              </button>
              <button className="btn btn-success"
                      onClick={() => createPassenger(passenger)}>
                  Create
              </button>
              <button className="btn btn-primary"
                      onClick={() => updatePassenger(passenger.id, passenger)}>
                  Save
              </button>
          </div>
      )
}


export default PassengerEditor