import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selectValue, setSelectValue] = useState(0);
  const [amount, setAmount] =useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
  }, []);

  const onChangeAmount = (event) => {
    setAmount(event.target.value);
  }
  const onChangeSelect = (event) => {
    setSelectValue(event.target.value);
  };

  const calculateChangedAmount = () => {
    if (selectValue !== 0) { 
      return Math.floor(amount / selectValue);
    }
    return 0;
  };

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
        ) : (
          <select onChange={onChangeSelect}>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}
              </option>
            ))}
          </select>
          )}
          <hr />
          <div>
          <label>Cost (USD): </label>
            <input id="cost" 
            value={amount}
            placeholder="Please input cost" 
            onChange={onChangeAmount}
            type="number">
            </input>
          </div>
          <div>
          <label>Amount of coin: </label>
            <input value={calculateChangedAmount()} disabled> 
            </input>
          </div>
        
    </div>
  );
}

export default App;
