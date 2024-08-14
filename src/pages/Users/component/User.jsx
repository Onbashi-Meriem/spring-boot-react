import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Alert } from "@/shared/components/Alert";
import Spinner from "@/shared/components/Spinner";
import { getUser } from "./api.js";

export function User() {
  let { id } = useParams();
  const [apiProgress, setApiProgress] = useState(false);
  const [user, setUser] = useState({});
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    const getUserById = async () => {
      setApiProgress(true);
      try {
        const response = await getUser(id);
        setUser(response.data);
      } catch (error) {
        setErrorMessage(error.response.data.message);
      } finally {
        setApiProgress(false);
      }
    };
    getUserById();
  }, []);
  return (
    <>
      {apiProgress && (
        <Alert styleType="secondary" center>
          <Spinner></Spinner>
        </Alert>
      )}
      {user && <Alert>{user.username}</Alert>}
      {errorMessage && <Alert styleType="danger">{errorMessage}</Alert>}
    </>
  );
}
