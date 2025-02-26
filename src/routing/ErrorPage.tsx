import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <h1>Oops...</h1>
      <p>
        {isRouteErrorResponse(error)
          ? 'Invalid Page!'
          : 'Sorry, an unexpected error has occurred.'}
      </p>
    </>
  );
};

export default ErrorPage;
