import React from "react";
import { useEffect, useState } from "react";
import { API } from "../Api/Api";
import axios from "axios";
import MediaGrid from "../MediaGrid/MediaGrid";

const MediaPage = () => {
  const [quoteData, setQuoteData] = useState([]);
  const [imgData, setImgData] = useState([]);
  const [trivia, setTrivia] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await API.get("/quotes");

        console.log(response.data);
        setQuoteData(response.data);
        // setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchQuote();
  }, []);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://online-movie-database.p.rapidapi.com/title/get-images",
      params: { tconst: "tt0903747", limit: "25" },
      headers: {
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
        "X-RapidAPI-Key": "63bf4b68b3msh22edc3403f4c93cp19e713jsnc4c9414a896d",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.images);
        setImgData(response.data.images);
        console.log(response.data.images[1].url);
        setIsLoading(false);
        // console.log(response.data.d[7].i.imageUrl);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://online-movie-database.p.rapidapi.com/title/get-trivia",
      params: { tconst: "tt0903747" },
      headers: {
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
        "X-RapidAPI-Key": "63bf4b68b3msh22edc3403f4c93cp19e713jsnc4c9414a896d",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.unspoilt);
        setTrivia(response.data.unspoilt);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return isLoading ? (
    <div className="spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  ) : (
    <div className="main-container">
      <div className="main-grid ">
        <MediaGrid
          isLoading={isLoading}
          imgData={imgData}
          quoteData={quoteData}
          trivia={trivia}
        />
      </div>
    </div>
  );
};
export default MediaPage;

//tt0903747
