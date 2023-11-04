import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Country({ countryName }) {
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((response) => response.json())
      .then((data) => setCountryData(data[0]))
      .catch((error) => console.error(error));
  }, [countryName]);

  if (!countryData) {
    return (
      <div className="row justify-content-center p-4">
        <Card style={{ width: "450px" }}>
          <Card.Img
            variant="top"
            src="https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-gray-background-pure-color-simple-image_557025.jpg"
            alt="..."
            className="opacity-50"
          />
          <Card.Body>
            <Card.Title className="placeholder-glow">
              <span className="placeholder col-6"></span>
            </Card.Title>
            <Card.Subtitle className="placeholder-glow">
              <span className="placeholder col-5"></span>
            </Card.Subtitle>
            <Card.Text className="placeholder-glow">
              <span className="placeholder col-7"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-6"></span>
              <span className="placeholder col-8"></span>
            </Card.Text>
            <Card.Link
              href="#"
              target="_blank"
              className="btn btn-info container disabled placeholder col-6"
              tabindex="-1"
              role="button"
              aria-disabled="true"
            ></Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
  return (
    <div className="row justify-content-center p-3">
      <Card style={{ width: "450px" }}>
        <Card.Img
          src={countryData.flags.svg}
          alt={`Bandera de ${countryData.name.common}`}
        />
        <Card.Body>
          <Card.Title style={{ fontSize: "2em" }}>
            {countryData.name.common}
          </Card.Title>
          <Card.Subtitle></Card.Subtitle>
          <Card.Text style={{ fontSize: "1.2em" }}>
            <b>Capital: </b>Capital: {countryData.capital} <br />
            <b>Población: </b> {countryData.population} <br />
            <b>Region: </b> {countryData.region} <br />
            <b>Subregion: </b> {countryData.subregion} <br />
            <b>Zona Horaria: </b> {countryData.timezones} <br />
            <b>Codigo telefonico: </b>{" "}
            {countryData.idd.root + countryData.idd.suffixes}
          </Card.Text>
          <Card.Link
            href={countryData.maps.googleMaps}
            target="_blank"
            className="btn btn-info container text-center"
            tabindex="-1"
            role="button"
            style={{ color: "white", fontSize: "1.3em" }}
          >
            Ver en mapa
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
