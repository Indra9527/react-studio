import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [amount, setAmount] = useState(0);
  const [entry, setEntry] = useState({});

  return (
    <div className="App">
      <h1>Ke' Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      <div style={{display: "flex"}}>
      <div className="itemPlace">
      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
          <BakeryItem item={item} amount={amount} setAmount={setAmount} entry={entry} setEntry={setEntry}></BakeryItem>
      ))}
      </div>
      <div className="cart">
        <h2>Cart</h2>
        {Object.keys(entry).map((key, index) => ( 
          <p key={index}>{entry[key]}x {key}</p>
        ))} 
        <p className="total">Total: ${amount}</p>
        <button>Check Out</button>
      </div>
      </div>
    </div>
  );
}

export default App;
