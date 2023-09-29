import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const handleTitleChange = () => {
  console.log("title");
};

const handleDateChange = () => {
  console.log("date");
};

const handleAmountChange = () => {
  console.log("amount");
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <form>
      <div className="form-control">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" onChange={handleTitleChange} />
      </div>

      <div className="form-control">
        <label htmlFor="date">Date</label>
        <input type="date" id="date" onChange={handleDateChange} />
      </div>

      <div className="form-control">
        <label htmlFor="amount">Amount</label>
        <input type="number" id="amount" onChange={handleAmountChange} />
      </div>
    </form>
  );
}

export default App;
