import React, { useState } from "react";

function CurrencyConvertor() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("Euro");

  const handleSubmit = (e) => {
    e.preventDefault();
    let result = 0;

    if (currency === "Euro") {
      result = parseFloat(amount) * 80;
    }

    alert(`Converting to ${currency} Amount is ${result}`);
  };

  return (
    <div>
      <h2 style={{ color: "green" }}>Currency Convertor!!!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount:</label>
          <br />
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Currency:</label>
          <br />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="Euro">Euro</option>
          </select>
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CurrencyConvertor;
