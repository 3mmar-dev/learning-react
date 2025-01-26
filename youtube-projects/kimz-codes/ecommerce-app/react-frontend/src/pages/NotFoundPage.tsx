import { Container } from "react-bootstrap";
import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <Container className="notfound">
      <h1>404 Not found</h1>
      <p>
        please{" "}
        <Link to={"/"} replace>
          go home
        </Link>
      </p>
    </Container>
  );
};

export default NotFoundPage;
