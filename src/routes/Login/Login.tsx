import React, { useCallback, useState } from 'react';
import fetcher from "../../utils/fetcher";
import useInput from "../../hooks/useInput";
import { Success, Form, Error, Label, Input, Button, Header, Title } from '../SignUp/style'
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";
import useSWR from 'swr';
import SignUp from '../SignUp/SignUp';
import styled from "styled-components";

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


const LogIn = () => {
  const { data, error, mutate } = useSWR('/api/users', fetcher);
  const [logInError, setLogInError] = useState(false);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setLogInError(false);
      axios
        .post(
          '/api/users/login',
          { email, password },
          {
            withCredentials: true,
          },
        )
        .then((response) => {
          ;
        })
        .catch((error) => {
          setLogInError(error.response?.data?.statusCode === 401);
        });
    },
    [email, password],
  );

 

  // console.log(error, userData);
  // if (!error && userData) {
  //   console.log('로그인됨', userData);
  //   return <Redirect to="/workspace/sleact/channel/일반" />;
  // }

  return (
    <div id="container">
      <Header><Title>Login</Title></Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <span>이메일 주소</span>
          <div>
            <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
          </div>
          {logInError && <Error>이메일과 비밀번호 조합이 일치하지 않습니다.</Error>}
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

export default LogIn;