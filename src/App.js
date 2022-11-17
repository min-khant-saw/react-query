import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import PostContent from "./components/PostContent";
import Main from "./Main";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/post/:id" element={<PostContent />} />
        <Route path="*" element={<h1>Error</h1>} />
      </Routes>
    </div>
  );
};

export default App;
