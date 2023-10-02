import { useState } from "react";

import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  const handleTitleChange = (event: any) => {
    setTitle(event.target.value);
  };

  const handleDateChange = (event: any) => {
    setDate(event.target.value);
  };

  const handleAmountChange = (event: any) => {
    setAmount(event.target.value);
  };

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
