const ErrorMessage = ({ message, error }) => {
  console.error(error);
  return <p>{message}</p>;
};

export default ErrorMessage;
