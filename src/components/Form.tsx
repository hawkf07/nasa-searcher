import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa/";

interface FormPropsTypes {
  inputForm: string;
  setInputForm: React.SetStateAction<string>;
  apiData: never[];
  setSearchedApiData: React.SetStateAction<never[]>;
  searchedApiData: never[];
  setApiData: React.SetStateAction<never[]>;
}

export const Form: React.FC<FormPropsTypes> = ({
  inputForm,
  setInputForm,
  apiData,
  setSearchedApiData,
  setApiData,
  searchedApiData,
}) => {
  const inputHandler = (e) => setInputForm(e.target.value);
  async function fetchApodApi() {
    try {
      const data = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${
          import.meta.env.VITE_NASA_API_KEY
        }`
      );
    } catch (error) {
      console.log(error);
    }
  }

  function SubmitHandler(e) {
    e.preventDefault();
    searchMediaLibraryHandler();
  }

  function searchMediaLibraryHandler() {
    if (inputForm.length > 0) {
      const data = axios.get(
        `https://images-api.nasa.gov/search?q=${inputForm}`
      );
      data.then((result) => setSearchedApiData([result.data]));
    }
  }
  useEffect(() => {
    fetchApodApi();
  }, []);

  return (
    <section name="form w-full p-3">
      <h1 className="text-center text-3xl">NASA MEDIA LIBRARY Searcher</h1>
      <form className="flex p-3" onSubmit={SubmitHandler}>
        <div className="relative flex text-center items-center w-full">
          <input
            type="text"
            className="w-full rounded  p-4 text-black"
            placeholder="search something awesome here"
            onChange={inputHandler}
          />
          <button
            type="submit"
            className="p-3 bg-sky-400 rounded-[10px]  absolute mx-3 right-0"
          >
            <FaSearch />
          </button>
        </div>
      </form>
    </section>
  );
};
