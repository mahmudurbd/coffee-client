import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeProducts from "./components/CoffeeProducts";
import { useState } from "react";

function App() {
  const loadedCoffeeData = useLoaderData();
  console.log(loadedCoffeeData);
  const [coffeeData, setCoffeeData] = useState(loadedCoffeeData);
  console.log("other", coffeeData);

  return (
    <>
      <CoffeeProducts coffeeData={coffeeData} setCoffeeData={setCoffeeData} />
    </>
  );
}

export default App;
