import React from "react";
import { Row, Button, ListGroup } from "react-bootstrap";

export default function BulletNote({ content, handleDeleteNote }) {
  return (
    <Row className="mb-2">
      <Button
        onClick={() => handleDeleteNote(content)}
        className="mr-2"
        variant="danger"
      >
        X
      </Button>
      <ListGroup.Item>{content}</ListGroup.Item>
    </Row>
  );
}
