import React, { useState } from 'react';
import {  Form, Label, Input, Button, Header, Title } from '../SignUp/style'
import { Link,} from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { withRouter } from 'react-router-dom';

const LinkContainer = styled.p`
margin:  auto ;
padding-left: 45px;
font-size: 15px;
color: #616061;
width: 400px;
max-width: 400px;
& a {
  color: #1264a3;
  text-decoration: none;
  font-weight: 700;
  &:hover {
    text-decoration: underline;
  }
}
`;




function LogIn (props) { 
console.log(props)
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  const onEmailHandler = (event) => {
      setEmail(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
      setPassword(event.currentTarget.value)
  }

  const onSubmitHandler = (event) => {
      event.preventDefault();

      let body = {
          email: Email,
          password: Password
      }

      axios.post('http://localhost:3002/api/users/login',body)
            .then(response => {
                if (response) {
                    props.history.push('/')
                } else {
                    alert('Error˝')
                }
            })


  }
  return (
    <div id="container">
      <Header><Title>Login</Title></Header>
      <Form onSubmit={onSubmitHandler}>
        <Label id="email-label">
          <span>이메일 주소</span>
          <div>
            <Input type="email" id="email" name="email" value={Email} onChange={onEmailHandler} />
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input type="password" id="password" name="password" value={Password} onChange={onPasswordHandler} />
          </div>
        </Label>
        <Button type="submit">로그인</Button>
      </Form>
      <LinkContainer>
        아직 회원이 아니신가요?&nbsp;
        <Link to="/signUp">회원가입 하러가기</Link>
      </LinkContainer>
    </div>
  );
};

export default withRouter(LogIn)