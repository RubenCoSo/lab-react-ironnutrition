import React, { useState } from "react";
import { Form, Input, Button, Col } from "antd";

export default function AddFood(props) {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState(25);
  const [image, setImage] = useState("");
  const [servings, setServings] = useState(1);

  const handleNameInput = (e) => setName(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handleServingsInput = (e) => setServings(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = { name, calories, image, servings };

    console.log(newFood);

    props.addFood(newFood);

    setName("");
    setCalories(25);
    setImage("");
    setServings(1);
  };

  return (
    <Col className="AddFood">
      <h4>Add Food</h4>
      {/* Cambia el manejo del form de ACTION + METHOD (Hacia endpoint express) a onSubmit() (Hacia este archivo) */}
      <Form onSubmit={handleSubmit}>
        <label>Name:</label>
        {/* Ejemplo de Input controlado -> Value: estado asociado Y onChange : funcion manejadora del cambio */}
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleNameInput}
        />

        <label>Calories:</label>
        <Input
          type="number"
          name="calories"
          value={calories}
          onChange={handleCaloriesInput}
        />

        <label>Image:</label>
        <Input
          type="text"
          name="image"
          value={image}
          onChange={handleImageInput}
        />

        <label>Servings:</label>
        <Input
          type="number"
          name="servings"
          checked={servings}
          onChange={handleServingsInput}
        />

        <Button
          type="primary"
          onClick={(event) => {
            handleSubmit();
          }}
        >
          Add Food
        </Button>
      </Form>
    </Col>
  );
}
