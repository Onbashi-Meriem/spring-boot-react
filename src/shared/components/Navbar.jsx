import { Link } from "react-router-dom";
import logo from "@/assets/hoaxify.png";
import { useTranslation } from "react-i18next";

export function Navbar() {
  const { t } = useTranslation();
  return (
    <nav className="navbar navbar-expand navbar-light bg-light shadow-sm mb-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} className="mr-3" width={60} />
          Hoaxify
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="navbar-brand" to="/login">
              {t("login")}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="navbar-brand" to="/signup">
              {t("signUp")}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
