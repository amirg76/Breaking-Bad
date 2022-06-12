import { useEffect, useState } from "react";
import { API, OMDAPI } from "../Api/Api";
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
    const fetchImages = async () => {
      try {
        const response = await OMDAPI.get("/get-images");
        console.log(response.data.images);
        setImgData(response.data.images);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchImages();
  }, []);

  useEffect(() => {
    const fetchTrivia = async () => {
      try {
        const response = await OMDAPI.get("/get-trivia");

        setTrivia(response.data.unspoilt);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchTrivia();
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
