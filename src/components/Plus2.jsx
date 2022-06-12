import React from "react";

const Plus2 = ({ counter }) => {
  // so we can see that react can works with both class component and functionally i mean like hybrid

  console.log("functional component", counter);

  return <div>Plus2</div>;
};

export default Plus2;
