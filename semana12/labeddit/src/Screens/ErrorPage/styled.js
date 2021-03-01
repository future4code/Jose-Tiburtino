import styled from "styled-components";

export const ErrorMain = styled.div`
  margin: auto;
  height: 100vh;
  width: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ErrorContainer = styled.div`
  width: 600px;
  height: 400px;
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const ImageError = styled.img`
  width: 100%;
  min-width: 350px;
  margin-bottom: 8px;
`;

export const Button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 20px;
  font-size: 16px;
  font-weight: bold;
  transition: 0.5s;
  background-color: royalblue;
  color: blanchedalmond;
  :hover {
    background-color: lightslategrey;
    margin-top: -8px;
  }
`;
