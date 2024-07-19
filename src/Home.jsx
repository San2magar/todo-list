import React, { useEffect, useState } from "react";
import {
  BsCircleFill,
  BsFillCheckCircleFill,
  BsFillTrashFill,
} from "react-icons/bs";
import Create from "./Create";
import axios from "axios";
import styled from "styled-components";
import image from "./assets/app.jpg";
function Home() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (id) => {
    axios
      .put("http://localhost:8000/update/" + id)
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8000/delete/" + id)
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <FormContainer>
      <div className="home" style={{ height: "100vh" }}>
        <h2 style={{ height: "30vh" }}></h2>
        <Create />
        <br />
        {todos.length === 0 ? (
          <div>
            <h2>No record</h2>
          </div>
        ) : (
          todos.map((todos) => (
            <div className="task">
              <div className="checkbox" onClick={() => handleEdit(todos._id)}>
                {todos.done ? (
                  <BsFillCheckCircleFill className="icon"></BsFillCheckCircleFill>
                ) : (
                  <BsCircleFill className="icon" />
                )}
                <p className={todos.done ? "line_through" : ""}>{todos.task}</p>
              </div>
              <div>
                <span>
                  <BsFillTrashFill
                    className="icon"
                    onClick={() => handleDelete(todos._id)}
                  />
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </FormContainer>
  );
}

export default Home;
const FormContainer = styled.div`
  background-image: url("/app.jpg");
  justify-content: center;
  top: 100px;
  display: flex;
  width: 100%;
`;
