import "./App.css";
import foodList from "./foods.json";
import { useState } from "react";
import { Divider, Col, Row } from "antd";
import FoodCard from "./components/FoodBox";

const FoodsCopy = [...foodList];

function App() {
  const [foods, setFoods] = useState(FoodsCopy);
  return (
    <Divider className="App">
      <Row>
        {foods.map((food) => {
          return <FoodCard food={food} />;
        })}
      </Row>
    </Divider>
  );
}

export default App;
