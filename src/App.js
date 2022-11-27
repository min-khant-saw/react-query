import axios from "axios";
import React from "react";
import { useMutation, useQuery } from "react-query";
import { Route, Routes } from "react-router";
import "./App.css";
import PostContent from "./components/PostContent";
import Main from "./Main";

const App = () => {
  const { isLoading, isError, error, data } = useQuery(
    "post",
    async () => await axios.get("https://jsonplaceholder.typicode.com/posts")
  );

  const { isLoading: load, isError: isErr, mutate } = useMutation();

  if (isLoading || load) return <h3>Loading...</h3>;
  if (isError || isErr) return <h3>{error.message}</h3>;

  return (
    <div>
      {data.data.map((result, i) => (
        <div key={i} className="mb-3">
          <h5>{result.title}</h5>
        </div>
      ))}
    </div>
  );
  // return (
  //   <div>
  //     <Routes>
  //       <Route path="/" element={<Main />} />
  //       <Route path="/post/:id" element={<PostContent />} />
  //       <Route path="*" element={<h1>Error</h1>} />
  //     </Routes>
  //   </div>
  // );
};

export default App;
