import "./App.css";
import foodList from "./foods.json";
import { useState } from "react";
import { Divider, Row } from "antd";
import FoodCard from "./components/FoodBox";
import AddFood from "./components/AddFood";

const FoodsCopy = [...foodList];

function App() {
  const [foodData, setFoodData] = useState(FoodsCopy);
  const [foods, setFoods] = useState(FoodsCopy);

  const addNewFood = (newFood) => {
    console.log(newFood);
    const updatedFoodData = [...foodData, newFood];
    const updatedFoods = [...foods, newFood];

    setFoodData(updatedFoodData);
    setFoods(updatedFoods);
  };

  function searchFood() {
    const filteredList = foodData.filter((food) =>
      food.name.toLowerCase().includes(textSearch.toLowerCase())
    );

    if (textSearch === "") {
      setFoods(foodData);
    } else {
      setFoods(filteredList);
    }
  }
  return (
    <Divider className="App">
      <Row>
        <AddFood addFood={addNewFood} />
      </Row>
      <Row>
        {foods.map((food) => {
          return <FoodCard food={food} />;
        })}
      </Row>
    </Divider>
  );
}

export default App;
