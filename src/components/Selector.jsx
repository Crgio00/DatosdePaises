import React, { useState, useEffect } from "react";
import Country from "./Country";
import Form from "react-bootstrap/Form";
async function fetchCountries() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  const countries = data.map((country) => country.name.common);
  countries.sort();
  return countries;
}

export default function Selector() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    async function fetchCountriesData() {
      const data = await fetchCountries();
      setCountries(data);
    }
    fetchCountriesData();
  }, []);

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="row justify-content-center p-4">
      <h1 className="text-center">DATOS DE PAISES </h1>
      <div className="row">
        <Form.Select
          style={{ width: "200px", margin: "10px" }}
          aria-label="Default select example"
          value={selectedCountry}
          onChange={handleChange}
          className="col"
        >
          <option>Selecciona un pais</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </Form.Select>
      </div>

      <Country countryName={selectedCountry} />
    </div>
  );
}
