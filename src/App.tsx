import { useState } from "react";
import News from "./components/News/News";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [triggerSearch, setTriggerSearch] = useState(false);

  const handleSearch = () => {
    setTriggerSearch(true); // Dispara a busca
  };

  return (
    <>
      <NavBar setSearchTerm={setSearchTerm} onSearch={handleSearch} />
      <News
        searchTerm={searchTerm}
        triggerSearch={triggerSearch}
        setTriggerSearch={setTriggerSearch}
      />
      <Footer />
    </>
  );
}

export default App;
