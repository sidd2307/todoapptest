import React from "react";
import { Button, Card, Form } from "react-bootstrap";

export default function Todo({
  todo,
  index,
  markTodo,
  removeTodo,
  handleEditing,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
        {todo.text}
      </span>
      <div>
        <Button variant="outline-primary" onClick={() => handleEditing(index)}>
          Edit
        </Button>{" "}
        <Button variant="outline-success" onClick={() => markTodo(index)}>
          ✓
        </Button>{" "}
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>
          ✕
        </Button>
      </div>
    </div>
  );
}
