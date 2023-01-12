import { HooksExample } from "./components/HooksExample";
import HooksExample2 from "./components/HooksExample2";
import Navbar from "./components/Navbar";
import UseCallBackExample from "./components/UseCallBackExample";
import UseMemoExample from "./components/UseMemoExample";
import UseRefExample from "./components/UseRefExample";
import UseRefExample2 from "./components/UseRefExample2";
import UseRefExample3 from "./components/UseRefExample3";

function App() {
  return (
    <div className="h-full">
      <Navbar />
      {/* <UseRefExample /> */}
      <HooksExample2 />
    </div>
  );
}

export default App;
