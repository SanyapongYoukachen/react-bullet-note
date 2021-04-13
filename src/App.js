import { useState } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  ListGroup,
  FormControl,
} from "react-bootstrap";
import BulletNote from "./components/BulletNote";

function App() {
  const [bullet, setBullet] = useState("");
  const [notes, setNotes] = useState([]);

  const handleDeleteNote = (content) => {
    const newNotes = notes.filter((note) => note !== content);
    setNotes(newNotes);
  };

  const handleSubmitNote = () => {
    if (bullet.trim() !== "") {
      const newNotes = [...notes, bullet];
      setNotes(newNotes);
    }
    setBullet("");
  };

  return (
    <Container className="my-4">
      <Row className="my-2 justify-content-center">
        <h1>Bullet Note</h1>
      </Row>
      <Row className="my-4">
        <InputGroup className="mb-3">
          <FormControl
            value={bullet}
            onChange={(e) => setBullet(e.target.value)}
            placeholder="What is your focus today?"
            aria-label="What is your focus today?"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button onClick={handleSubmitNote} variant="outline-secondary">
              Note
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Row>
      <ListGroup variant="flush">
        {notes.map((note, index) => {
          return (
            <BulletNote
              key={index}
              content={note}
              handleDeleteNote={handleDeleteNote}
            />
          );
        })}
      </ListGroup>
    </Container>
  );
}

export default App;

// if (bullet.trim() !== "") {
//   const newNotes = [...notes, bullet];
//   setNotes(newNotes);
// }
