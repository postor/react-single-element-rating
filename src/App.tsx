import "./styles.css";
import Rating from "./Rating";
import { useState } from "react";
export default function App() {
  let [rating, setRating] = useState(0);
  return (
    <div className="App">
      <Rating value={rating} onChange={(x) => setRating(x)} />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
