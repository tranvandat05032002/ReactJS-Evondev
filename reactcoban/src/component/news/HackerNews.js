import axios from "axios";
import lodash from "lodash";
import React, { useEffect, useRef, useState } from "react";

// API search: https://hn.algolia.com/api/v1/search?query=react

const HackerNews = () => {
  //hook
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  //handle
  // const handleUpDateQuery = lodash.debounce((e) => {
  //   setQuery(e.target.value);
  // }, 2000);
  const handFetchData = useRef({});
  handFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      console.log(response);
      setHits(response.data?.hits || []);
      setLoading(!loading);
    } catch (error) {
      console.log(error);
      setLoading(false);
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
      {loading && (
        <div className="loading w-8 h-8 rounded-full border-4 border-red-300 border-r-0 border-l-0 animate-spin"></div>
      )}
      <div>
        {!loading &&
          hits.length > 0 &&
          hits.map((item, index) => <h3 key={index}>{item.title}</h3>)}
      </div>
    </div>
  );
};

export default HackerNews;
