import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

type RootLayoutProps = {};

const RootLayout = ({}: RootLayoutProps) => {
  return (
    <main>
      <Navbar />

      <Outlet />
    </main>
  );
};

export default RootLayout;
