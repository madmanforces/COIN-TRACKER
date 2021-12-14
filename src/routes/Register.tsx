import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import styled from "styled-components";
import { Link } from "react-router-dom";

/* function ToDoList() {
  const [toDo, setToDo] = useState("");
  const [toDoError, setToDoError] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDoError("");
    setToDo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (toDo.length < 10) {
      return setToDoError("To do should be longer");
    }
    console.log("submit");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} placeholder="Write a to do" />
        <button>Add</button>
        {toDoError !== "" ? toDoError : null}
      </form>
    </div>
  );
} */
const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
  font-weight: 700;
`;

const Form = styled.form`
  max-width: 420px;
  margin: 0 auto;
  &:not(.search__form) {
  padding: 30px;
  background-color: rgba($color: $bg, $alpha: 0.7);
  border-radius: 10px;
  border: 1px solid rgba($color: #fff, $alpha: 0.1);
`;
const Input= styled.input`
  all: unset;
  padding: 15px 20px;
  border-radius: 15px;
  border: 1px solid white;
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.textColor};
  margin-bottom: 5px;
  font-size: 16px;
  width: 90%;
  &::placeholder {
    color: ${(props) => props.theme.textColor};
}
`;
const Button = styled.button`
  border-radius: 5px;
  padding: 12px 20px;
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.textColor};
  text-align: center !important;
  cursor: pointer;
  display: block;
  border: none;
  &:focus {
    outline: none;
  }
  &:disabled {
  opacity: 0.5;
  pointer-events: none;
  
}
`
function Login({}) {
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <div>
      <Header> 
        <Title>
        <Link to={`/`}>
          Login
          </Link>
        </Title>
      </Header>
      <Form>
        <Input {...register("email")} placeholder="Email" />
        <Input {...register("firstName")} placeholder="First Name" />
        <Input {...register("lastName")} placeholder="Last Name" />
        <Input {...register("username")} placeholder="Username" />
        <Input {...register("password")} placeholder="Password" />
        <Input {...register("password-confirm")} placeholder="Password-confirm" />
        <Button>로그인</Button>
      </Form>
    </div>
  );
}
export default Login;