import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
//https://picsum.photos/v2/list?page=2&limit=100
//https://picsum.photos/v2/list

const getRandomPhotos = async (page) => {
  try {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=10`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const AgainPhoto = () => {
  const [randomPhotos, setRandomPhotos] = useState([]);
  const [nextShow, setNextShow] = useState(1);
  const handleLoadMore = useRef({});
  handleLoadMore.current = async () => {
    const images = await getRandomPhotos(nextShow);
    const newPhotos = [...randomPhotos, ...images];
    setRandomPhotos(newPhotos);
    setNextShow((prev) => prev + 1);
  };
  useEffect(() => {
    handleLoadMore.current();
  }, []);
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="grid grid-cols-5 gap-2 px-5">
        {randomPhotos.length > 0 &&
          randomPhotos.map((item, index) => (
            <img
              key={item.id}
              className="w-[300px] h-[300px] object-cover"
              src={item.download_url}
              alt={item.author}
            />
          ))}
      </div>
      <button
        className="px-7 py-4 bg-blue-400 text-white rounded-full my-4"
        onClick={handleLoadMore.current}
      >
        Load more...
      </button>
    </div>
  );
};

export default AgainPhoto;
