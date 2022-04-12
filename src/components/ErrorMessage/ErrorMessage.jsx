import "./ErrorMessage.css";

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-msg-text">
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
