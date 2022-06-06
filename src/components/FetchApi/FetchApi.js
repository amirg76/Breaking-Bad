import axios from "axios";
import { API } from "../Api/Api";

import { useEffect, useState } from "react";

// export const FetchApi = ({ url }) => {
// const [data, setData] = useState([]);

const FetchApi = async ({ url }) => {
  try {
    const response = await API.get(`${url}`);

    return response.data;
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};
// fetchData();
// const fetchData = async () => {
//   try {
//     const response = await API.get(`${url}`);
//     return response.data;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// fetchData();
// };

export default FetchApi;
