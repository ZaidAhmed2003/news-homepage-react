import Navbar from "./components/Navbar";
import Featured from "./components/Featured";
import New from "./components/New";
import Articles from "./components/Articles";

function App() {
  return (
    <div className="container mx-auto my-10 px-5 md:my-20 xl:max-w-[1200px]">
      <Navbar />
      <div className="my-10 gap-10 md:my-16 lg:flex">
        <Featured />
        <New />
      </div>
      <Articles />
    </div>
  );
}

export default App;
