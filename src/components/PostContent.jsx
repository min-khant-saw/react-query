import axios from "axios";
import React, { useMemo } from "react";
import { useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router";

const fetchData = ({ queryKey }) => {
  const key = queryKey[1];
  const data = axios.get(`http://localhost:8000/posts/${key}`);
  return data.data;
};

const PostContent = () => {
  const { id } = useParams();
  const queryCache = useQueryClient();

  // const placeholderData = useMemo(() => {
  //   console.log(
  //     queryCache.getQueriesData("project")[0][1]?.find((d) => d.id == id)
  //   );
  //   return queryCache.getQueriesData("project")[0][1]?.find((d) => d.id == id);
  // }, []);
  const { data, status, error } = useQuery(["post", id], fetchData, {
    // initialData: {
    //   // console.log(queryCache.getQueriesData("project")[0][1]);
    //   placeholder: queryCache.getQueriesData("project")[0][1].find((d) => d.id == id);
    // },
    placeholderData: queryCache
      .getQueriesData("project")[0][1]
      .find((d) => d.id == id),
  });

  if (status === "loading") return <h3>Loading</h3>;
  if (status === "error") return <h3>{error.message}</h3>;

  console.log(data);

  return <div>{JSON.stringify(data)}</div>;
};

export default PostContent;
