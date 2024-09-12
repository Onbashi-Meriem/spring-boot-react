import { Link } from "react-router-dom";
import logo from "@/assets/hoaxify.png";
import { useTranslation } from "react-i18next";
import { useAuthState, useAuthDispatch } from "../state/context";
import { ProfileImage } from "@/shared/components/ProfileImage";

export function Navbar() {
  const authState = useAuthState();
  const dispatch = useAuthDispatch();
  const { t } = useTranslation();

  const onClickLogout = () => {
    dispatch({ type: "logout-success" });
  };
  return (
    <nav className="navbar navbar-expand navbar-light bg-light shadow-sm mb-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} className="mr-3" width={60} />
          Hoaxify
        </Link>
        <ul className="navbar-nav">
          {authState.id === 0 && (
            <>
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
            </>
          )}
          {authState.id !== 0 && (
            <>
              <li className="nav-item">
                <Link className="navbar-brand" to={`/users/${authState.id}`}>
                  <ProfileImage width={30} image={authState.image} />
                  <span className="ms-1 fs-6">{authState.username}</span>
                </Link>
              </li>
              <li className="nav-item">
                <span
                  className="navbar-brand"
                  role="button"
                  onClick={onClickLogout}
                >
                  Logout
                </span>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
