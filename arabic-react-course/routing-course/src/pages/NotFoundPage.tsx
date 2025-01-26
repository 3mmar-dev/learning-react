import { Link } from "react-router";

type NotFoundPageProps = {};

const NotFoundPage = ({}: NotFoundPageProps) => {
  return (
    <>
      <h1>404 not found!</h1>
      <Link to={"/"}>Go Home</Link>
    </>
  );
};

export default NotFoundPage;
