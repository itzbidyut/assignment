import { useState, useEffect, useCallback } from "react";

import "./App.css";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState("");
  const [countryResults, setCountryResults] = useState([]);
  const api = `https://restcountries.com/v2/all`;

  useEffect(() => {
    async function getSuggestions() {
      setLoading(true);
      await fetch(api)
        .then((res) => res.json())
        .then((data) => setCountries(data));
    }
    getSuggestions();
    setLoading(false);
  }, [api]);

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 200);
    };
  };

  const searchData = (text) => {
    if (text.length > 0) {
      let regex = new RegExp(`${text}`, "gi");
      let match = countries.filter((country) => {
        return country.name.match(regex);
      });

      setCountryResults(match);
    } else if (text.length === 0) {
      setCountryResults([]);
    }
  };
  const searchData2 = useCallback(debounce(searchData), []);

  return (
    <div>
      <h1>Search country name</h1>
      <div className="inputbox">
        <input
          placeholder="Search country name"
          onChange={(e) => searchData2(e.target.value)}
        />
      </div>
      {countryResults.length > 0 && (
        <div className="search_results">
          <div className="search-box">
            {countryResults?.map((item) => (
              <div key={item.id} className="searchResult">
                <p className="item">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
