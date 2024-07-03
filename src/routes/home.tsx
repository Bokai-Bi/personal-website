import React from "react";

import Header from "../components/header.tsx";
import Readme from "../components/readme.tsx";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <Readme />
    </div>
  );
};

export default Home;
