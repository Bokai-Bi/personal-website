import "./App.css";
import Header from "./components/header.tsx";
import Readme from "./components/readme.tsx";

function App() {
  return (
    <div className="w-screen h-full flex flex-col justify-center items-start">
      <Header />
      <div className="w-full h-[114514px] bg-blue-200">
        <Readme />
      </div>
    </div>
  );
}

export default App;
