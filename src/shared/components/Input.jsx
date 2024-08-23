/* eslint-disable react/prop-types */
export function Input(props) {
  const { id, label, error, onChange, type, defaultValue } = props;
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        defaultValue={defaultValue}
        className={error ? "form-control is-invalid" : "form-control"}
        id={id}
        type={type}
        onChange={onChange}
      />
      <div className="invalid-feedback">{error}</div>
    </div>
  );
}
