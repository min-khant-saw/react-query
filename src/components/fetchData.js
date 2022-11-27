import axios from "axios";

export const url = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

const fetchData = async ({ pageParam = 1 }) => {
  // const data = await url.get(`/posts?_page=${pageParam}`);
  // return data.data;
  const data = await url.get(`/posts?_page=${pageParam}`);
  return data.data;
};

export default fetchData;
