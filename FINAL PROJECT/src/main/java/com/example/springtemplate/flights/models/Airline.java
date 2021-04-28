package com.example.springtemplate.flights.models;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

  @Entity
  @Table(name="arlines")
  public class Airline {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    public Integer getId() {
      return id;
    }
    public void setId() { this.id = id;}

    private String companyName;
    public String getCompanyName() { return companyName; }
    public void setCompanyName(String companyName) { this.companyName = companyName; }

    private String telephone;
    public String getTelephone() { return telephone; }
    public void setTelephone(String telephone) { this.telephone = telephone; }

    private String country;
    public String getCountry() {return country; }
    public void setCountry(String country) {this.country = country; }


    public Airline(Integer id,String companyName, String telephone, String country) {
      this.id = id;
      this.companyName = companyName;
      this.telephone = telephone;
      this.country = country;
    }
    public Airline() {}

    public void replaceAllAttributes(Airline updatedAirline) {
      this.setCompanyName(updatedAirline.getCompanyName());
      this.setTelephone(updatedAirline.getTelephone());
      this.setCountry(updatedAirline.getCountry());
    }

  }

