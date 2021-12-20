import styled from "styled-components";

export const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
  font-weight: 700;
`;

export const Form = styled.form`
  max-width: 420px;
  margin: 0 auto;
  &:not(.search__form) {
  padding: 30px;
  background-color: rgba($color: $bg, $alpha: 0.7);
  border-radius: 10px;
  border: 1px solid rgba($color: #fff, $alpha: 0.1);
`;
export const Label = styled.label`
  margin-bottom: 16px;
  & > span {
    display: block;
    text-align: left;
    padding-bottom: 8px;
    font-size: 15px;
    cursor: pointer;
    line-height: 1.46666667;
    font-weight: 700;
  }
`;
export const Error = styled.div`
  color: #e01e5a;
  margin: 8px 0 16px;
  font-weight: bold;
`;
export const Success = styled.div`
  color: #2eb67d;
  font-weight: bold;
`;
export const LinkContainer = styled.p`
  margin:  auto ;
  padding-left: 70px;
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
export const Input= styled.input`
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
export const Button = styled.button`
  width: 100%;
  max-width: 100%;
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