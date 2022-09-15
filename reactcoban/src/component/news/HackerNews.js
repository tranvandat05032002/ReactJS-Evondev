import axios from "axios";
import lodash from "lodash";
import React, { useEffect, useRef, useState } from "react";

// API search: https://hn.algolia.com/api/v1/search?query=react

const HackerNews = () => {
  //hook
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");
  //handle
  // const handleUpDateQuery = lodash.debounce((e) => {
  //   setQuery(e.target.value);
  // }, 2000);
  const handFetchData = useRef({});
  handFetchData.current = async () => {
    try {
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      console.log(response);
      setHits(response.data?.hits || []);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handFetchData.current();
  }, [query]);
  return (
    <div>
      <input
        type="text"
        className="border border-gray-200 m-5 block rounded-md transition-all focus:border-blue-400"
        placeholder="Typing your keyword..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />

      <div>
        {hits.length > 0 &&
          hits.map((item, index) => <h3 key={index}>{item.title}</h3>)}
      </div>
    </div>
  );
};

export default HackerNews;
