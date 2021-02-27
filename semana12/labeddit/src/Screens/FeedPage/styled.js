import styled from "styled-components";
import { Fab } from "@material-ui/core";

export const FeedPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2vh;
  height: 100%;
  min-height: 100vh;
  background-color: #dbe0e6;
`;

export const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const NewPostContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 575px;
  margin: 0px auto;
  justify-content: center;
  padding: 1em;
  background-color: white;
  border-radius: 3px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  @media screen and (min-device-width: 320px) and (max-device-width: 420px) {
    margin-top: 20px;
    width: 100vw;
  }
  @media screen and (min-device-width: 421px) and (max-device-width: 800px) {
    margin-top: 20px;
  }
`;

export const SpacingBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const H3 = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
