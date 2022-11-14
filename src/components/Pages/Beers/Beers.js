import home from "../../../assets/home.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";

export default function Beers() {
  const [beers, setBeers] = useState([]);

  //Captura a API sem o Axios
  //
  //   fetch("https://ih-beers-api2.herokuapp.com/beers")
  //     .then((response) => {
  //       response.json().then((data) => console.log(data));
  //     })
  //     .catch((error) => console.log(error));

  //useEffect
  // 1o arg é uma callback -> código que queremos rodar (no caso vai todo o código do axios)
  // 2o arg é um array de valores de que o código depende para rodar
  // se o array estiver vazio, o useEffect roda quando a aplicação é iniciada
  //usando dessa forma evita que o console.log abaixo fique sendo repetido indefinidamente
  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        setBeers(response.data);
        //console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const renderBeers = beers.map((beer) => {
    return (
      <Col key={beer._id}>
        <img src={beer.image_url} alt="" />
        <h3>{beer.name}</h3>
        <h5>{beer.tagline}</h5>
        <p>{beer.contributed_by}</p>
      </Col>
    );
  });

  return (
    <div>
      <Link to="/">
        <header>
          <img src={home} alt="" />
        </header>
        <Row>{renderBeers}</Row>
      </Link>
    </div>
  );
}
