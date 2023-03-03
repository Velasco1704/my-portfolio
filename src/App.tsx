import { Nav } from "@components/Nav";
import { Home } from "@containers/Home";
import { About } from "./containers/About";
import { Works } from "@containers/Works";

export const App = () => {
  return (
    <div className="relative">
      <Nav />
      <Home />
      <About />
      <Works />
    </div>
  );
};
