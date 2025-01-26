import { Brush } from "lucide-react";
import NavBar from "./components/NavBar";

import AmmarLogo from "./assets/images/db1b2e1f4607e60ce6ef26f4bff1ebe2-removebg-preview.png";
import { useState } from "react";

function App() {
  const [displayLogo, setDisplayLogo] = useState(false);

  return (
    <div className="relative">
      <NavBar />
      <div
        onMouseEnter={() => setDisplayLogo(true)}
        onMouseLeave={() => setDisplayLogo(false)}
        className="absolute p-2 rounded-full cursor-pointer left-4 bottom-4 bg-primary"
      >
        <Brush />
      </div>

      <div
        className={`absolute inset-0 mx-auto my-auto z-50 overflow-hidden size-80 transition duration-500 ${
          displayLogo
            ? "opacity-100 translate-y-8"
            : "opacity-0 -translate-y-[200%]"
        }`}
      >
        <img src={AmmarLogo} className="object-cover size-96" />
      </div>
    </div>
  );
}

export default App;
