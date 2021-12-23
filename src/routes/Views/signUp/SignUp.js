import React, { useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import {Header,Title,Form,Input,Button,LinkContainer,Error,Success,Label} from "../style"
import { registerUser } from '../../_actions/user_action';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function SignUp(props) {
    
    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [NickName, setNickName] = useState("")
    const [Password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")


    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onNickNameHandler = (event) => {
        setNickName(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (Password !== ConfirmPassword) {
            return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
        }

        let body = {
            email: Email,
            password: Password,
            nickname: NickName
        }
        dispatch(registerUser(body))
            .then(response => {
                if (response.payload.success) {
                    props.history.push("/")
                } else {
                    alert("Failed to sign up")
                }
            })
    }

  return (
    <div id="container">
      <Header><Title>Sign Up</Title></Header>
      <Form onSubmit={onSubmitHandler}>
        <Label id="email-label">
          <span>이메일 주소</span>
          <div>
            <Input type="email" id="email" name="email" value={Email} onChange={onEmailHandler} />
          </div>
        </Label>
        <Label id="nickname-label">
          <span>닉네임</span>
          <div>
            <Input type="text" id="nickname" name="nickname" value={NickName} onChange={onNickNameHandler} />
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input type="password" id="password" name="password" value={Password} onChange={onPasswordHandler} />
          </div>
        </Label>
        <Label id="password-check-label">
          <span>비밀번호 확인</span>
          <div>
            <Input
              type="password"
              id="password-check"
              name="password-check"
              value={ConfirmPassword}
              onChange={onConfirmPasswordHandler}
            />
          </div>
        </Label>
        <Button type="submit">회원가입</Button>
      </Form>
      <LinkContainer>
        이미 회원이신가요?&nbsp;
        <Link to="/">로그인 하러가기</Link>
      </LinkContainer>
    </div>
  );
};

export default withRouter(SignUp)