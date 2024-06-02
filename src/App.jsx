import React from "react";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mx-auto mt-8">
        {/* Your other components will go here */}
        <h1 className="text-3xl font-bold">Welcome to MyApp</h1>
      </div>
    </div>
  );
}

export default App;
