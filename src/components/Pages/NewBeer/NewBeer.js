import home from "../../../assets/home.png";
import { Link } from "react-router-dom";

export default function NewBeer() {
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
