/* eslint-disable react/prop-types */
import Spinner from "./Spinner";

export function Button({ apiProgress, disabled, children }) {
  return (
    <button className="btn btn-primary" disabled={apiProgress || disabled}>
      {apiProgress && <Spinner sm={true}></Spinner>}
      {children}
    </button>
  );
}
