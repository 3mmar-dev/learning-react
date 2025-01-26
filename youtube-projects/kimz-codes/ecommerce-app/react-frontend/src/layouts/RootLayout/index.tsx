import { Header, Footer } from "@/components/common";
import { Container } from "react-bootstrap";

import styles from "./styles.module.css";
import { Outlet } from "react-router";

const { container, wrapper } = styles;

const RootLayout = () => {
  return (
    <Container className={container}>
      <Header />

      <div className={wrapper}>
        <Outlet />
      </div>
      <Footer />
    </Container>
  );
};

export default RootLayout;
