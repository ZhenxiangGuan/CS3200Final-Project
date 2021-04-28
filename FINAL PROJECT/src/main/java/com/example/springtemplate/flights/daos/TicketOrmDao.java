package com.example.springtemplate.flights.daos;

import com.example.springtemplate.flights.models.Flight;
import com.example.springtemplate.flights.models.Ticket;
import com.example.springtemplate.flights.repositories.TicketRepository;
import com.example.springtemplate.flights.repositories.FlightRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class TicketOrmDao {
  @Autowired
  TicketRepository ticketRepository;

  @Autowired
  FlightRepository flightRepository;

  @PostMapping("/api/tickets")
  public Ticket createTicket(@RequestBody Ticket ticket) {
    return ticketRepository.save(ticket);
  }

  @PostMapping("/api/flights/{flightId}/tickets")
  public Ticket createTicketForFlight(@PathVariable("flightId") Integer fid,
                                 @RequestBody Ticket ticket) {
    Flight flight = flightRepository.findFlightById(fid);
    ticket.setFlight(flight);
    return ticketRepository.save(ticket);
  }

  @GetMapping("/api/flights/{flightId}/tickets")
  public List<Ticket> findTicketsForFlight(@PathVariable("flightId") Integer fid) {
    return ticketRepository.findTicketsByFlightId(fid);
  }

  @GetMapping("/api/tickets")
  public List<Ticket> findAllTickets() {
    return ticketRepository.findAllTickets();
  }

  @GetMapping("/api/tickets/{ticketId}")
  public Ticket findTicketById(
      @PathVariable("ticketId") Integer id) {
    return ticketRepository.findTicketById(id);
  }

  @PutMapping("/api/tickets/{ticketId}")
  public Ticket updateTicket(
      @PathVariable("ticketId") Integer tid,
      @RequestBody Ticket updatedTicket) {
    Ticket ticket = this.findTicketById(tid);
    ticket.replaceAllAttributes(updatedTicket);
    return ticketRepository.save(ticket);
  }


  @DeleteMapping("/api/tickets/{ticketId}")
  public void deleteTicket(
      @PathVariable("ticketId") Integer id) {
    ticketRepository.deleteById(id);
  }

}
