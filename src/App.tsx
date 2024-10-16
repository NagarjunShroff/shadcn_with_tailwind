import { FaceIcon } from "@radix-ui/react-icons";
import { SunIcon } from "lucide-react";
import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    // <Button variant="destructive" className="gap-2 items-center">
    //   <FaceIcon />
    //   Click Me
    //   <SunIcon />
    // </Button>
    <Button
      asChild
      leftElement={<FaceIcon />}
      rightElement={<SunIcon />}
      className="gap-2"
    >
      <div>Testing</div>
    </Button>
  );
}

export default App;
