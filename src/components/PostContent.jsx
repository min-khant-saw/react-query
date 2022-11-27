import axios from "axios";
import React, { useMemo } from "react";
import { useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router";

const fetchData = async ({ queryKey }) => {
  const key = queryKey[1];
  const data = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${key}`
  );
  return data.data;
};

const PostContent = () => {
  const { id } = useParams();
  const queryCache = useQueryClient();

  const placeholderData = useMemo(
    () =>
      queryCache
        .getQueriesData("project")[0][1]
        .pages[0]?.find((d) => d.id == id),
    []
  );
  const { data, status, error } = useQuery(["post", id], fetchData, {
    placeholderData,
  });

  if (status === "loading") return <h3>Loading</h3>;
  if (status === "error") return <h3>{error.message}</h3>;

  return <div>{data.title}</div>;
};

export default PostContent;
