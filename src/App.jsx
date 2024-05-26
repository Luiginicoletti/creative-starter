import HSection from "./pages/HSection";
import Welcome from "./pages/Welcome";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <HSection />
    </div>
  );
};

export default App;
