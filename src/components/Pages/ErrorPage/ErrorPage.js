import home from "../../../assets/home.png";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <div>
        <Link to="/">
          <header>
            <img src={home} alt="" />
          </header>
        </Link>
      </div>

      <h1>Error</h1>
    </div>
  );
}
