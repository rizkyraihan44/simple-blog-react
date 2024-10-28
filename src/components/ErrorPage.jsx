import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
  const error = useRouteError()
  return (
    <>
      <h1>Error</h1>
      <p>{error.message}</p>
    </>
  )
}

export default ErrorPage