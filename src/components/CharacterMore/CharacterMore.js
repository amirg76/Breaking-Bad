import { useEffect, useContext } from "react";
import { myContext } from "../Context/mycontext";
import "../CharacterMore/CharacterMore.css";

import { moreDetail } from "../MoreDetials";
const CharacterMore = (props) => {
  const { data, setData } = useContext(myContext);

  useEffect(() => {
    const char_id = props.match.params.id;
    const activeId = moreDetail.filter((element) => {
      return element.char_id === Number(char_id);
    });

    // console.log(activeId[0]);
    // setCurrentData(activeId[0]);
    setData(activeId[0]);
  }, []);
  // const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="more-detail-continer">
      {/* {console.log(currnetData)} */}
      <img src={data.img} className="more-detail-img" alt=""></img>
      <h1 className="more-detail-header">{data.name}</h1>
      <div className="more-detail-bio">{data.bio}</div>
      <div className="more-detail-overview">
        <h3 className="more-detail-overview_header">Overview</h3>
        <div className="more-detail-overview_lines">
          <h5>Born:</h5>
          <span className="more-detail-span">{data.born}</span>
        </div>
        <div className="more-detail-overview_lines gray-back">
          <h5>Height:</h5>
          <span className="more-detail-span ">{data.height}</span>
        </div>
      </div>
      <div className="more-detail-overview">
        <h3 className="more-detail-overview_header">Family</h3>
        <div className="more-detail-overview_lines">
          <h5>Spouse:</h5>
          <span className="more-detail-span">{data.spouse}</span>
        </div>
        <div className="more-detail-overview_lines gray-back">
          <h5>Children:</h5>
          <span className="more-detail-span">{data.children}</span>
        </div>
        <div className="more-detail-overview_lines">
          <h5>Parents:</h5>
          <span className="more-detail-span">{data.parents}</span>
        </div>
      </div>
      <div className="more-detail-overview">
        <h3 className="more-detail-overview_header">Trivia</h3>
        <div className="more-detail-overview_lines gray-back">
          -<span className="more-detail-span">{data.trivia1}</span>
        </div>
        <div className="more-detail-overview_lines">
          -<span className="more-detail-span">{data.trivia2}</span>
        </div>
        <div className="more-detail-overview_lines gray-back">
          -<span className="more-detail-span">{data.trivia3}</span>
        </div>
        <div className="more-detail-overview_lines">
          -<span className="more-detail-span">{data.trivia4}</span>
        </div>
        <div className="more-detail-overview_lines gray-back">
          -<span className="more-detail-span">{data.trivia5}</span>
        </div>
      </div>
    </div>
  );
};

export default CharacterMore;
