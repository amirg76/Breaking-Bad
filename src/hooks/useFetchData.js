import { useState, useEffect } from "react";
import { API, OMDAPI, MOKEAPI } from "../components/Api/Api";

const useFetchData = (api, query = "") => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let response = "";
  console.log(api);

  useEffect(() => {
    fetchQuery(query);
  }, [query]);
  const fetchQuery = async (query) => {
    try {
      if (api === "API") {
        response = await API.get(`/characters?name=${query}`);
        console.log(response.data);
      }
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return [data, isLoading];
};
export default useFetchData;
