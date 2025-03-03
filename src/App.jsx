import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [quote, setQuote] = useState("");
  const getQuote = () => {
    axios
      .get("http://api.quotable.io/random")
      .then((response) => {
        setQuote(response.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      getQuote();
    }, 5000);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div className="App">
      <button onClick={getQuote}>Get Quote</button>
      {quote && <h1>{quote}</h1>}
    </div>
  );
}

export default App;
