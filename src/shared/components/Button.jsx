/* eslint-disable react/prop-types */
import Spinner from "./Spinner";

export function Button({
  apiProgress,
  disabled,
  children,
  onClick,
  styleType = "primary",
  type = "button",
}) {
  return (
    <button
      type={type}
      className={`btn btn-${styleType}`}
      disabled={apiProgress || disabled}
      onClick={onClick}
    >
      {apiProgress && <Spinner sm={true}></Spinner>}
      {children}
    </button>
  );
}
