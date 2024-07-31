import React from "react";

function Home({name, city, color}) {
  return (
    <div id="home">
      <h1 style={{color}}>Welcome to my Home Page</h1>
      <p>{`${name} is a Web Developer from ${city}`}</p>  
      
    </div>
  );
}

export default Home;
