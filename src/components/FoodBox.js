import { Col, Card, Button } from "antd";

const { Meta } = Card;

export default function FoodCard(props) {
  return (
    <Col>
      <Card
        key={props.food.name}
        hoverable
        style={{ width: 230, height: 300, margin: 10 }}
        cover={<img src={props.food.image} alt={props.food.name} />}
      >
        <Meta title={props.food.name} description="" />
        <p>Calories: {props.food.calories}</p>
        <p>Servings: {props.food.servings}</p>
        <p>
          <b>Total Calories: {props.food.calories * props.food.servings} </b>
          kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}
