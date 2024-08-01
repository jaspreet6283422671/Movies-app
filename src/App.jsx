import React, { useState,useEffect } from "react";
import "./App.css";
import "./index.css";
function App() {
  const [search, setSearch] = useState(""); // State for search term
  const [a, setA] = useState([]);
  const [indexing, setIndexing] = useState(0);
  const [result, setResult] = useState(false);
  const url = "https://www.omdbapi.com/?i= &apikey=73aa2f6b";

  async function searching(query) {
    const response = await fetch(`${url}&s=${search}`);
    const data = await response.json();
    setA(data.Search);
    setResult(true);
    console.log(data.Search);
  }
  useEffect(() => {
    searching(search); // Call searching with the default query when component mounts
  }, []);
  function increament() {
    setIndexing(indexing + 1);
    console.log(indexing);
  }
  return (
    <>
      <div className="searchbox">
        {
          <p>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)} // Update search term
            />
            <button onClick={() => searching(search)}>Click here</button>
            <button onClick={increament}>Next</button>
          </p>
        }
      </div>

      <div className="card-making">
        {a?.map((item, index) => {
          console.log(item);
          console.log("hello");
          console.log(index);
          return (
            <div className="container">
              <div className="one-div">
                {console.log(item.Poster)}
                <img src={item.Poster} alt="image not found"></img>
              </div>
              <div className="content">
                <p>{item.Title}</p>
                <p>{item.Year}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{margin:100}}>{result ? a[indexing].Poster : "No data"}</div>
    </>
  );
}

export default App;
