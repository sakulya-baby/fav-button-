import React from "react";
import { Button } from "./components/Button";

const App = () => {
  return (
    <div className="container">
      <Button variant="contained">contained</Button>
      <Button variant="outlined">outlinad</Button>
      <Button variant="warning">warning</Button>
      <Button variant="danger">danger</Button>
    </div>
  );
};

export default App;
