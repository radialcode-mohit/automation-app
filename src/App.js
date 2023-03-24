import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import PostAutomation from "./components/PostAutomation";
import Header from "./components/Header";
import PreAutomation from "./components/PreAutomation";
import IncreasingProcess from "./components/IncreasingProcess";
import Duration from "./components/Duration";

function App() {
  return (
    <>
      <Header />
      <PreAutomation />
      <PostAutomation />
      <IncreasingProcess />
      <Duration />
    </>
  );
}

export default App;
