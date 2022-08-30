import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import Todo from "../components/Todo";
import FormTodo from "../components/FormTodo";

export default function Todoapp() {
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  const [currentTodoIndex, setCurrentTodoIndex] = useState();

  function handleEditInputChange(e) {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
    console.log(currentTodo);
  }

  function handleEditing(index) {
    setIsEditing(!isEditing);
    const newTodos = [...todos];
    console.log(newTodos[index].text);
    setCurrentTodo(newTodos[index]);
    setCurrentTodoIndex(index);
  }

  function handleUpdateTodo(id, updatedTodo) {
    console.log("id", id);
    const updatedItem = todos.map((todo, id1) => {
      return id1 === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setTodos(updatedItem);
  }

  function handleEditFormSubmit(e) {
    e.preventDefault();

    handleUpdateTodo(currentTodoIndex, currentTodo);
  }

  const [todos, setTodos] = useState([
    {
      text: "This is a sampe todo",
      isDone: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        {isEditing ? (
          <Form onSubmit={handleEditFormSubmit}>
            <Form.Group>
              <Form.Label>
                <b>Add Todo</b>
              </Form.Label>
              <Form.Control
                type="text"
                className="input"
                value={currentTodo.text}
                onChange={handleEditInputChange}
                placeholder="Update todo"
              />
            </Form.Group>
            <Button variant="primary mb-3 mt-3" type="submit">
              Submit
            </Button>
          </Form>
        ) : (
          <FormTodo addTodo={addTodo} />
        )}
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                  handleEditing={handleEditing}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
