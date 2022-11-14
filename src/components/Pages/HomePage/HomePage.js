import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import beers from "../../../assets/beers.png";
import randomBeer from "../../../assets/random-beer.png";
import newBeers from "../../../assets/new-beer.png";

export default function HomePage() {
  return (
    <div>
      <h1>IronBeers Home Page</h1>
      <Container fluid>
        <Row>
          <Link to="/beers">
            All Beers
            <img src={beers} alt="" />
          </Link>
        </Row>

        <Row>
          <Link to="/random-beer">
            Random Beer
            <img src={randomBeer} alt="" />
          </Link>
        </Row>

        <Row>
          <Link to="/new-beer">
            New Beer
            <img src={newBeers} alt="" />
          </Link>
        </Row>
      </Container>
    </div>
  );
}
