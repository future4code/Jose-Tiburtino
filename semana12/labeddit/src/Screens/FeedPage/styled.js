import styled from "styled-components";
import { Fab } from "@material-ui/core";

export const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const NewPostContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 465px;
  margin: 0px auto;
  justify-content: center;
  padding: 1em;
  background-color: white;
`;
export const FeedPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 9vh;
  height: 100%;
  min-height: 100vh;
  background-color: #dbe0e6;
  @media (max-width: 500px) {
    padding-top: 24vh;
  }
`;
export const BackToTop = styled(Fab)`
  display: none;
  position: fixed;
  border-radius: 9999px;
  font-family: Noto Sans, Arial, sans-serif;
  height: 32px;
  width: 128px;
  bottom: 30px;
  right: 30px;
  color: white;
  font-size: 14px;
  line-height: 17px;
  padding: 0 16px;
  min-width: 32px;
`;
