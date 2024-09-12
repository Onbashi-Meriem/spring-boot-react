import { Input } from "@/shared/components/Input";
import { Button } from "@/shared/components/Button";
import { Alert } from "@/shared/components/Alert";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { login } from "./api";
import { useAuthDispatch } from "@/shared/state/context";
import { useNavigate } from "react-router-dom";

export function Login() {
  const { t } = useTranslation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [apiProgress, setApiProgress] = useState();
  //   const [successMessage, setSuccessMessage] = useState();
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState();

  const dispatch = useAuthDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setErrors((lastError) => {
      return {
        ...lastError,
        email: undefined,
      };
    });
  }, [email]);

  useEffect(() => {
    setGeneralError("");
  }, [email, password]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setApiProgress(true);
    try {
      const response = await login({
        email,
        password,
      });
      console.log(response.data.user);
      dispatch({ type: "login-success", data: response.data });
      navigate("/");
    } catch (err) {
      console.log(err);
      if (err) {
        if (err.response.status === 400) {
          setErrors(err.response.data.validationErrors);
        } else {
          setGeneralError(err.response.data.message);
        }
      } else {
        setGeneralError(t("genericError"));
      }
    } finally {
      setApiProgress(false);
    }
  };

  return (
    <div className="container">
      <div className="col-lg-6 offset-lg-3 col-sm-8 offset-sm-2">
        <form className="card" onSubmit={onSubmit}>
          <div className="text-center card-header">
            <h1>{t("login")}</h1>
          </div>
          <div className="card-body">
            <Input
              id="email"
              label={t("email")}
              error={errors.email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Input
              id="password"
              label={t("password")}
              type="password"
              //   error={errors.password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {/* 
            {successMessage && <Alert>{successMessage}</Alert>}*/}
            {generalError && <Alert styleType="danger">{generalError}</Alert>}
            <div className="text-center">
              <Button
                apiProgress={apiProgress}
                disabled={!password || !email}
                type="submit"
              >
                {t("login")}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
