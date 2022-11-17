import React from "react";
import { useQueries } from "react-query";
import fetchData from "./fetchData";

const CustomQuery = ({ result }) => {
  const value = useQueries(
    result.map((id) => {
      return {
        queryKey: ["test", id],
        queryFn: () => fetchData(id),
      };
    })
  );
  return (
    <div>
      {value.map((val, i) => (
        <div key={i}>
          {" "}
          {val.isLoading ? <>Lading</> : <h3 key={i}>{val.data.title}</h3>}
        </div>
      ))}
    </div>
  );
};

export default CustomQuery;
