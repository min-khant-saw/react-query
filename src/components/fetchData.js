import axios from "axios";

export const url = axios.create({
  baseURL: "http://localhost:8000",
});

const fetchData = async ({ pageParam = 1 }) => {
  // const data = await url.get(`/posts?_page=${pageParam}`);
  // return data.data;
  const data = await url.get(`/posts`);
  return data.data;
};

export default fetchData;
