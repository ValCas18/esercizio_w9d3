import { Badge } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function SingleBook(props) {
	return (
		<Card className="g-1">
			<Card.Img variant="top" src={props.img} className="image" />
			<Card.Body className="d-flex flex-column justify-content-end align-items-center">
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>
					{props.category.toUpperCase()} - <Badge className="bg-success"> {props.price} €</Badge> €
				</Card.Text>
				<Button variant="primary">Buy!</Button>
			</Card.Body>
		</Card>
	);
}

export default SingleBook;
