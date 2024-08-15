import { Alert } from "@/shared/components/Alert";
import Spinner from "@/shared/components/Spinner";
import { getUser } from "../api.js";
import { useRouteParamApiRequest } from "@/shared/hooks/useRouteParamApiRequest.js";
import { ProfileCard } from "./ProfileCard.jsx";

export function User() {
  const {
    apiProgress,
    data: user,
    error,
  } = useRouteParamApiRequest("id", getUser);

  return (
    <>
      {apiProgress && (
        <Alert styleType="secondary" center>
          <Spinner></Spinner>
        </Alert>
      )}
      {user && <ProfileCard user={user}>user</ProfileCard>}
      {error && <Alert styleType="danger">{error}</Alert>}
    </>
  );
}
