import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { activateUser } from "./api";
import { Alert } from "@/shared/components/Alert";
import Spinner from "@/shared/components/Spinner";

export function Activation() {
  let { token } = useParams();
  const [apiProgress, setApiProgress] = useState(false);
  const [successMessage, setSuccessMessage] = useState();
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    const activate = async () => {
      setApiProgress(true);
      try {
        const response = await activateUser(token);
        setSuccessMessage(response.data.message);
      } catch (error) {
        setErrorMessage(error.response.data.message);
      } finally {
        setApiProgress(false);
      }
    };
    activate();
  }, []);
  return (
    <>
      {apiProgress && (
        <Alert styleType="secondary" center>
          <Spinner></Spinner>
        </Alert>
      )}
      {successMessage && <Alert>{successMessage}</Alert>}
      {errorMessage && <Alert styleType="danger">{errorMessage}</Alert>}
      <div> token : {token}</div>
    </>
  );
}
