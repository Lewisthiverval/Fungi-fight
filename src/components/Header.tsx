import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import { useAppState } from "../store";
import "./Header.css";

export default function Header({}: {}) {
  const logout = useAppState((x) => x.logout);
  return (
    <header>
      <Link to="/">
        <img src={logo}></img>
      </Link>
      <div>
        <Link to="/" className="hide-link-large">
          fight
        </Link>
        <Link to="/chat" className="hide-link-large">
          Chat
        </Link>
        <a href="#" onClick={logout}>
          Log out
        </a>
        {/* <a href="#" onClick={toggleViewData}>
          Species
        </a>
        <a href="#" onClick={toggleCreateNewFigtht}>
          Timetable
        </a> */}
      </div>
    </header>
  );
}
