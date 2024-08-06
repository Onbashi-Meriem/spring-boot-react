/* eslint-disable react/prop-types */
export default function Spinner(props) {
  const { sm } = props;
  return (
    <span
      className={`spinner-border mr-2 ${sm ? "spinner-border-sm" : ""}`}
      aria-hidden="true"
    ></span>
  );
}
