import "./ErrorMessage.css";

const ErrorMessage = ({ message, error }) => {
  return (
    <div className="error-msg-text">
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
