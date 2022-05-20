import "./App.css";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <div className="bg-gray-200 flex justify-center items-center flex-col py-10">
        <div className="bg-gray-200 dark:bg-gray-700 drop-shadow-md rounded-md shadow-md shadow-gray-800 bg-opacity-20 backdrop-filter rounded-b-xl">
          <p className="text-xl font-thin font-sans my-5 text-white">
            Welcome to <span className="uppercase font-normal">Redux</span> Math
            Calc
          </p>
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
