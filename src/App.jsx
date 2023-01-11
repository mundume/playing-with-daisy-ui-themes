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
      <UseCallBackExample />
    </div>
  );
}

export default App;
