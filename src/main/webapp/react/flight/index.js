import PassengerList from "./passengers/passenger-list";
import PassengerEditor from "./passengers/passenger-editor";
import FlightList from "./flights/flight-list";
import FlightEditor from "./flights/flight-editor";
import TicketEditor from "./tickets/ticket-editor";
import TicketList from "./tickets/ticket-list";


const {HashRouter, Link, Route} = window.ReactRouterDOM;

const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/passengers", "/"]} exact={true}>
                    <PassengerList/>
                </Route>
                <Route path="/passengers/:id" exact={true}>
                    <PassengerEditor/>
                </Route>
                <Route path="/passengers/:passengerId/flights" exact={true}>
                    <FlightList/>
                </Route>
                <Route path="/passengers/:passengerId/flights/:id" exact={true}>
                    <FlightEditor/>
                </Route>
                <Route path="/passengers/:passengerId/flights/:flightId/tickets" exact={true}>
                    <TicketList/>
                </Route>
                <Route path="/passengers/:passengerId/flights/:flightId/tickets/:id" exact={true}>
                    <TicketEditor/>
                </Route>

            </HashRouter>
        </div>
    );
}

export default App;