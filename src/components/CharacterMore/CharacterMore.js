import { useEffect, useState } from "react";
// import { myContext } from "../Context/mycontext";
import "../CharacterMore/CharacterMore.css";
import { MOKEAPI } from "../Api/Api";
// import { moreDetail } from "../MoreDetials";
const CharacterMore = (props) => {
  // const { data, setData } = useContext(myContext);
  // const [moreData, setMoreData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchcharacters = async () => {
      const char_id = props.match.params.id;
      try {
        const { data } = await MOKEAPI.get("/breaking-bad-more");

        // const getMoreData = response.data;

        const activeId = data.filter((element) => {
          console.log(element);
          return element.newDetials.char_id === Number(char_id);
        });
        console.log(activeId[0].newDetials);
        setCurrentData(activeId[0].newDetials);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchcharacters();
  }, [props.match.params.id, setCurrentData]);

  return isLoading ? (
    <div className="spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  ) : (
    <div className="more-detail-continer">
      {console.log(currentData)}
      <img src={currentData.img} className="more-detail-img" alt=""></img>
      <h1 className="more-detail-header">{currentData.name}</h1>
      <div className="more-detail-bio">{currentData.bio}</div>
      <div className="more-detail-overview">
        <h3 className="more-detail-overview_header">Overview</h3>
        <div className="more-detail-overview_lines">
          <h6>Born:</h6>
          <span className="more-detail-span">{currentData.born}</span>
        </div>
        <div className="more-detail-overview_lines gray-back">
          <h6>Height:</h6>
          <span className="more-detail-span ">{currentData.height}</span>
        </div>
      </div>
      <div className="more-detail-overview">
        <h3 className="more-detail-overview_header">Family</h3>
        <div className="more-detail-overview_lines">
          <h6>Spouse:</h6>
          <span className="more-detail-span">{currentData.spouse}</span>
        </div>
        <div className="more-detail-overview_lines gray-back">
          <h6>Children:</h6>
          <span className="more-detail-span">{currentData.children}</span>
        </div>
        <div className="more-detail-overview_lines">
          <h6>Parents:</h6>
          <span className="more-detail-span">{currentData.parents}</span>
        </div>
      </div>
      <div className="more-detail-overview">
        <h3 className="more-detail-overview_header">Trivia</h3>
        <div className="more-detail-overview_lines gray-back">
          -<span className="more-detail-span">{currentData.trivia1}</span>
        </div>
        <div className="more-detail-overview_lines">
          -<span className="more-detail-span">{currentData.trivia2}</span>
        </div>
        <div className="more-detail-overview_lines gray-back">
          -<span className="more-detail-span">{currentData.trivia3}</span>
        </div>
        <div className="more-detail-overview_lines">
          -<span className="more-detail-span">{currentData.trivia4}</span>
        </div>
        <div className="more-detail-overview_lines gray-back">
          -<span className="more-detail-span">{currentData.trivia5}</span>
        </div>
      </div>
    </div>
  );
};

export default CharacterMore;
