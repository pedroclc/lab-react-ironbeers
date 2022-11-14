import home from "../../../assets/home.png";
import { Link } from "react-router-dom";

export default function RandomBeer() {
  return (
    <div>
      <Link to="/">
        <header>
          <img src={home} alt="" />
        </header>
      </Link>
    </div>
  );
}
