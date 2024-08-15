import { activateUser } from "./api";
import { Alert } from "@/shared/components/Alert";
import Spinner from "@/shared/components/Spinner";
import { useRouteParamApiRequest } from "@/shared/hooks/useRouteParamApiRequest.js";

export function Activation() {
  const { apiProgress, data, error } = useRouteParamApiRequest(
    "token",
    activateUser
  );
  return (
    <>
      {apiProgress && (
        <Alert styleType="secondary" center>
          <Spinner></Spinner>
        </Alert>
      )}
      {data && data.message && <Alert>{data.message}</Alert>}
      {error && <Alert styleType="danger">{error}</Alert>}
    </>
  );
}
