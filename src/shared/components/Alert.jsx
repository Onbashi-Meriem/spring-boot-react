/* eslint-disable react/prop-types */
export function Alert(props) {
  const { children, styleType = "success", center } = props;
  return (
    <div
      className={`alert alert-${styleType} ${center ? "text-center" : ""}`}
      role="alert"
    >
      {children}
    </div>
  );
}
