import "./MainPage.css";

import { API } from "../Api/Api";
import { useEffect, useState, useContext } from "react";
import { myContext } from "../Context/mycontext";
import useFetchData from "../../hooks/useFetchData";
import CharacterGrid from "../CharacterGrid/CharacterGrid";
import Search from "../Search/Search";

const MainPage = () => {
  // const { data, setData } = useContext(myContext);
  // const { data, setData, navToggle } = useContext(myContext);

  const [userQuery, setUserQuery] = useState("");
  const [data, fetchQuery, isLoading] = useFetchData("API", userQuery);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchQuery = async () => {
  //     try {
  //       const response = await API.get(`/characters?name=${userQuery}`);
  //       setData(response.data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   fetchQuery("API", userQuery);
  // }, [data, fetchQuery]);
  // }, [userQuery, setData]);

  return isLoading ? (
    <div className="spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  ) : (
    <div className="main-container">
      <div className="logo-main">
        <img src="./assets/img/logo.png" alt=""></img>
      </div>
      <Search getQuery={(e) => setUserQuery(e)} />

      <div
        className="main-grid"
        // className={
        //   navToggle
        //     ? "main-grid nav-toggle-hidden"
        //     : " main-grid nav-toggle-show"
        // }
      >
        <CharacterGrid data={data} />
      </div>
    </div>
  );
};

export default MainPage;

//search by name//14329
// https://api.themoviedb.org/3/search/person?query="dean norris"&api_key=a8e9f12d1dd37aa1993775451a8c0c83&language=en-US&page=1&include_adult=false

// search by id//14329
// https://api.themoviedb.org/3/person/14329?api_key=a8e9f12d1dd37aa1993775451a8c0c83&language=en-US

// imdb // 040ed4f55cmshfa8aad6cd7ca605p13ed4djsn705e045a1987

// tmdb // a8e9f12d1dd37aa1993775451a8c0c83
//75780
