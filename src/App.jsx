import { Outlet } from "react-router-dom";
import { LanguageSelector } from "./shared/components/languageSelector";
import { Navbar } from "./shared/components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
        <LanguageSelector />
      </div>
    </>
  );
}

export default App;
