import { useState } from "react";
import News from "./components/News/News";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [triggerSearch, setTriggerSearch] = useState(false);

  const handleSearch = () => {
    setTriggerSearch(true);
  };

  return (
    <>
      <NavBar setSearchTerm={setSearchTerm} onSearch={handleSearch} />
      <News
        searchTerm={searchTerm}
        triggerSearch={triggerSearch}
        setTriggerSearch={setTriggerSearch}
      />
    </>
  );
}

export default App;
