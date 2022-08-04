import { useState } from "react";
import { DisplayInfo } from "./components/DisplayInfo";

import { Form } from "./components/Form";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [inputForm, setInputForm] = useState([]);
  const [apiData, setApiData] = useState([]);
  const [searchedApiData, setSearchedApiData] = useState([]);
  return (
    <div className="w-full dark dark:bg-gray-800 min-h-[100vh] text-white">
      <Form
        inputForm={inputForm}
        setInputForm={setInputForm}
        searchedApiData={searchedApiData}
        setSearchedApiData={setSearchedApiData}
      />
      <DisplayInfo
        inputForm={inputForm}
        searchedApiData={searchedApiData}
        apiData={apiData}
      />
    </div>
  );
}

export default App;
