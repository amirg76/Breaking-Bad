import MediaCard from "../MediaCard/MediaCard";
// import { useEffect } from "react";

const MediaGrid = ({ isLoading, imgData, quoteData, trivia }) => {
  let urlArr = [];
  let quoteArr = [];
  let triviaArr = [];
  const mergeArr = [];

  // const mapUrl = () => {
  urlArr = imgData.map((element) => {
    const imgObj = { url: element.url };
    return imgObj;
  });
  // };

  // const mapQuote = () => {
  quoteArr = quoteData.map((element) => {
    const quoteObj = { quote: element.quote, author: element.author };
    return quoteObj;
  });
  // };

  triviaArr = trivia.map((element) => {
    const quoteObj = { text: element.text };
    return quoteObj;
  });

  // useEffect(() => {

  for (let i = 0; i < urlArr.length; i++) {
    const newObj = {
      url: urlArr[i].url,
      quote: quoteArr[i].quote,
      author: quoteArr[i].author,
      text: triviaArr[i].text,
    };
    mergeArr.push(newObj);
  }
  console.log(mergeArr);
  // }, []);
  return isLoading ? (
    <>
      {console.log(isLoading)}

      <h1>Loading...</h1>
    </>
  ) : (
    <section className="media-cards">
      {mergeArr.map((dataElement) => (
        <MediaCard key={dataElement.url} data={dataElement} />
      ))}
    </section>
  );
};

export default MediaGrid;
